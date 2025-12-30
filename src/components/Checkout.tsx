import { useState } from 'react';
import { CartItem } from './Cart';
import { config } from '../config';

interface CheckoutProps {
  items: CartItem[];
  total: number;
  onClose: () => void;
}

export const Checkout = ({ items, total, onClose }: CheckoutProps) => {
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: ''
  });
  
  const [shippingData, setShippingData] = useState({
    address: '',
    city: '',
    province: '',
    postalCode: '',
    reference: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es obligatorio';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'El WhatsApp es obligatorio';
    } else if (!/^\d+$/.test(formData.whatsapp.replace(/\s/g, ''))) {
      newErrors.whatsapp = 'El WhatsApp debe contener solo números';
    }

    // Validar datos de envío si es delivery
    if (deliveryType === 'delivery') {
      if (!shippingData.address.trim()) {
        newErrors.address = 'La dirección es obligatoria';
      }
      if (!shippingData.city.trim()) {
        newErrors.city = 'La ciudad es obligatoria';
      }
      if (!shippingData.province.trim()) {
        newErrors.province = 'La provincia es obligatoria';
      }
      if (!shippingData.postalCode.trim()) {
        newErrors.postalCode = 'El código postal es obligatorio';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Generar mensaje de WhatsApp
    const orderDetails = items.map(item => 
      `- ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString('es-AR')}`
    ).join('\n');

    const deliveryInfo = deliveryType === 'pickup' 
      ? '\n\nRetiro en local:\nMadariaga 1111, Paso de los Libres, Corrientes\nHorarios: Lun-Vie 10:30-12:30 / 16:00-20:00, Sáb 15:00-19:00'
      : `\n\nEnvío a domicilio:\nDirección: ${shippingData.address}\nCiudad: ${shippingData.city}\nProvincia: ${shippingData.province}\nCódigo Postal: ${shippingData.postalCode}${shippingData.reference ? `\nReferencia: ${shippingData.reference}` : ''}`;

    const message = `${config.baseWhatsappMessage}

Cliente:
Nombre: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}${deliveryInfo}

Pedido:
${orderDetails}

Total: $${total.toLocaleString('es-AR')}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleShippingChange = (field: string, value: string) => {
    setShippingData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.whatsapp && 
    (deliveryType === 'pickup' || (shippingData.address && shippingData.city && shippingData.province && shippingData.postalCode)) &&
    Object.keys(errors).length === 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 rounded-lg w-full max-w-md md:max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-100">Confirmar Pedido</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Selector de tipo de entrega */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Tipo de entrega *
              </label>
              <div className="flex bg-dark-700 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setDeliveryType('pickup')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    deliveryType === 'pickup'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Retiro en local
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    deliveryType === 'delivery'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Envío a domicilio
                </button>
              </div>
              
              {deliveryType === 'pickup' && (
                <div className="mt-3 p-3 bg-dark-700 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <strong>Dirección:</strong> Madariaga 1111, Paso de los Libres, Corrientes
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    <strong>Horarios:</strong> Lun-Vie 10:30-12:30 / 16:00-20:00, Sáb 15:00-19:00
                  </p>
                </div>
              )}
            </div>
            {/* Datos de envío - solo si es delivery */}
            {deliveryType === 'delivery' && (
              <div className="space-y-4 border-t border-dark-700 pt-4">
                <h3 className="text-lg font-medium text-gray-100 mb-3">Datos de envío</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Dirección completa *
                  </label>
                  <input
                    type="text"
                    value={shippingData.address}
                    onChange={(e) => handleShippingChange('address', e.target.value)}
                    className={`input-field ${errors.address ? 'border-red-500' : ''}`}
                    placeholder="Calle, número, piso, depto"
                  />
                  {errors.address && (
                    <p className="text-red-400 text-sm mt-1">{errors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      value={shippingData.city}
                      onChange={(e) => handleShippingChange('city', e.target.value)}
                      className={`input-field ${errors.city ? 'border-red-500' : ''}`}
                      placeholder="Ciudad"
                    />
                    {errors.city && (
                      <p className="text-red-400 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Código Postal *
                    </label>
                    <input
                      type="text"
                      value={shippingData.postalCode}
                      onChange={(e) => handleShippingChange('postalCode', e.target.value)}
                      className={`input-field ${errors.postalCode ? 'border-red-500' : ''}`}
                      placeholder="CP"
                    />
                    {errors.postalCode && (
                      <p className="text-red-400 text-sm mt-1">{errors.postalCode}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Provincia *
                  </label>
                  <select
                    value={shippingData.province}
                    onChange={(e) => handleShippingChange('province', e.target.value)}
                    className={`input-field ${errors.province ? 'border-red-500' : ''}`}
                  >
                    <option value="">Seleccionar provincia</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Chaco">Chaco</option>
                    <option value="Chubut">Chubut</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Corrientes">Corrientes</option>
                    <option value="Entre Ríos">Entre Ríos</option>
                    <option value="Formosa">Formosa</option>
                    <option value="Jujuy">Jujuy</option>
                    <option value="La Pampa">La Pampa</option>
                    <option value="La Rioja">La Rioja</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Misiones">Misiones</option>
                    <option value="Neuquén">Neuquén</option>
                    <option value="Río Negro">Río Negro</option>
                    <option value="Salta">Salta</option>
                    <option value="San Juan">San Juan</option>
                    <option value="San Luis">San Luis</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Santa Fe">Santa Fe</option>
                    <option value="Santiago del Estero">Santiago del Estero</option>
                    <option value="Tierra del Fuego">Tierra del Fuego</option>
                    <option value="Tucumán">Tucumán</option>
                  </select>
                  {errors.province && (
                    <p className="text-red-400 text-sm mt-1">{errors.province}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Referencia (opcional)
                  </label>
                  <input
                    type="text"
                    value={shippingData.reference}
                    onChange={(e) => handleShippingChange('reference', e.target.value)}
                    className="input-field"
                    placeholder="Entre calles, puntos de referencia, etc."
                  />
                </div>
                
                <div className="mt-3 p-3 bg-primary-900/20 border border-primary-600/30 rounded-lg">
                  <p className="text-sm text-primary-300">
                    <strong>📦 Costo de envío:</strong> Se calcula según destino y peso. Te informamos el precio exacto al confirmar tu pedido.
                  </p>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Nombre *
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                placeholder="Tu nombre"
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Apellido *
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                placeholder="Tu apellido"
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                WhatsApp *
              </label>
              <input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                className={`input-field ${errors.whatsapp ? 'border-red-500' : ''}`}
                placeholder="11XXXXXXXX"
              />
              {errors.whatsapp && (
                <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>
              )}
            </div>

            <div className="border-t border-dark-700 pt-4 mt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-100">Total:</span>
                <span className="text-xl font-bold text-primary-400">
                  ${total.toLocaleString('es-AR')}
                </span>
              </div>
              
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isFormValid
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-dark-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                Confirmar Pedido por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};