import { config } from '../config';

interface TermsConditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsConditionsModal = ({ isOpen, onClose }: TermsConditionsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-dark-700 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-primary-400 font-display">
            Términos y Condiciones
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
              <h4 className="text-xl font-semibold text-primary-400 mb-3">1. Uso del Sitio</h4>
              <p className="leading-relaxed">
                El acceso y uso de este sitio web implica la aceptación de los presentes 
                Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos, 
                te recomendamos no utilizar este sitio.
              </p>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">2. Información de Productos</h4>
              <p className="leading-relaxed">
                <strong>Las imágenes y descripciones de los productos son ilustrativas y pueden 
                variar según disponibilidad o proveedor.</strong> Nos esforzamos por mantener la 
                información actualizada, pero recomendamos confirmar detalles específicos antes 
                de realizar un pedido.
              </p>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">3. Pedidos y Consultas</h4>
              <p className="leading-relaxed">
                <strong>Los pedidos realizados a través del sitio son solicitudes de contacto 
                y están sujetos a confirmación de disponibilidad y stock.</strong> Todos los 
                pedidos se procesan vía WhatsApp donde confirmamos disponibilidad, precios 
                actualizados y coordenamos la entrega.
              </p>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">4. Precios</h4>
              <p className="leading-relaxed">
                <strong>Los precios publicados pueden modificarse sin previo aviso y están 
                sujetos a confirmación al momento de la compra.</strong> Los precios finales 
                se confirman al procesar cada pedido individual.
              </p>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">5. Propiedad Intelectual</h4>
              <p className="leading-relaxed">
                Todo el contenido del sitio (textos, imágenes, logotipo, diseño) es propiedad 
                de {config.businessName} y está protegido por derechos de autor. No puede ser 
                utilizado, reproducido o distribuido sin autorización expresa.
              </p>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">6. Responsabilidad</h4>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>{config.businessName} brinda información orientativa sobre cultivo 
                  y no se responsabiliza por el uso indebido de los productos ni por resultados 
                  obtenidos en cultivos.</strong>
                </p>
                <p className="leading-relaxed">
                  Es responsabilidad del usuario:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Conocer y cumplir la legislación local aplicable</li>
                  <li>Usar los productos de manera segura y responsable</li>
                  <li>Seguir las instrucciones de uso de cada producto</li>
                </ul>
              </div>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">7. Modificaciones</h4>
              <p className="leading-relaxed">
                {config.businessName} se reserva el derecho de modificar estos términos 
                en cualquier momento. Las modificaciones entrarán en vigor inmediatamente 
                después de su publicación en el sitio.
              </p>
            </section>

            <section>
              <h4 className="text-xl font-semibold text-primary-400 mb-3">8. Contacto</h4>
              <p className="leading-relaxed mb-3">
                Para consultas sobre estos términos y condiciones:
              </p>
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