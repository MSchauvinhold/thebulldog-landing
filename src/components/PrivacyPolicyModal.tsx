import { config } from '../config';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-dark-700 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-primary-400 font-display">
            Política de Privacidad
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-6">
          <div className="space-y-6 text-gray-300">
            
            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">1. Introducción</h4>
              <p className="leading-relaxed">
                En {config.businessName} valoramos y respetamos la privacidad de nuestros usuarios. 
                Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la 
                información personal brindada a través de este sitio web.
              </p>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">2. Datos que Recopilamos</h4>
              <p className="leading-relaxed mb-3">
                Recopilamos únicamente la información necesaria para brindar nuestros servicios:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nombre (cuando nos contactás)</li>
                <li>Número de teléfono (WhatsApp)</li>
                <li>Email (si proporcionás uno)</li>
                <li>Datos de navegación anónimos (cookies/analytics)</li>
              </ul>
              <p className="leading-relaxed mt-3">
                <strong>No recopilamos datos sensibles ni información de pago.</strong>
              </p>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">3. Uso de la Información</h4>
              <p className="leading-relaxed mb-3">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder consultas y pedidos</li>
                <li>Enviar información solicitada sobre productos</li>
                <li>Mejorar la experiencia del sitio web</li>
                <li>Brindar asesoramiento personalizado</li>
              </ul>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">4. Compartir Información</h4>
              <p className="leading-relaxed">
                <strong>{config.businessName} no vende ni comparte información personal con terceros</strong>, 
                salvo cuando sea necesario para el funcionamiento del sitio o por requerimiento legal.
              </p>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">5. Cookies</h4>
              <p className="leading-relaxed">
                Este sitio puede utilizar cookies con fines estadísticos y de mejora del servicio. 
                El usuario puede desactivarlas desde la configuración de su navegador.
              </p>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">6. Derechos del Usuario</h4>
              <p className="leading-relaxed">
                El usuario puede solicitar la modificación o eliminación de sus datos personales 
                contactándonos por los medios indicados en este sitio.
              </p>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">7. Contacto</h4>
              <div className="space-y-2">
                <p><strong>WhatsApp:</strong> {config.whatsappNumber}</p>
                <p><strong>Email:</strong> info@thebulldoggrowshop.com</p>
                <p><strong>Dirección:</strong> Madariaga 1111, Paso de los Libres, Corrientes</p>
              </div>
            </section>

            <section className="border-t border-dark-700 pt-4">
              <p className="text-sm text-gray-400">
                Última actualización: {new Date().toLocaleDateString('es-AR')}
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};