import { useState } from 'react';
import { CartItem } from './Cart';
import { config } from '../config';

interface CheckoutProps {
  items: CartItem[];
  total: number;
  onClose: () => void;
}

export const Checkout = ({ items, total, onClose }: CheckoutProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: ''
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

    const message = `${config.baseWhatsappMessage}

Cliente:
Nombre: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}

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

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.whatsapp && Object.keys(errors).length === 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
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