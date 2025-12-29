import { useState } from 'react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqs = [
  {
    question: "¿Cómo realizo un pedido?",
    answer: "Agregá los productos que querés al carrito y hacé clic en 'Confirmar Pedido'. Te redirigirá a WhatsApp donde podés completar tu pedido con nosotros directamente."
  },
  {
    question: "¿Hacen envíos?",
    answer: "Sí, hacemos envíos a todo el país. Los costos varían según la ubicación y el peso del pedido. Consultanos por WhatsApp para conocer el costo exacto a tu zona."
  },
  {
    question: "¿Cómo se paga?",
    answer: "Aceptamos transferencia bancaria, MercadoPago, efectivo y tarjetas de débito/crédito. Coordinamos el método de pago que más te convenga al confirmar tu pedido."
  },
  {
    question: "¿Cuánto tarda el pedido?",
    answer: "Los pedidos locales se entregan en 24-48hs. Para envíos al interior, el tiempo depende del correo (generalmente 3-7 días hábiles). Te mantenemos informado del estado de tu pedido."
  },
  {
    question: "¿Asesoran a iniciantes?",
    answer: "¡Por supuesto! Nuestro equipo tiene años de experiencia y está siempre disponible para asesorarte. Desde la elección de productos hasta técnicas de cultivo, estamos para ayudarte."
  }
];

export const FAQModal = ({ isOpen, onClose }: FAQModalProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800 rounded-lg w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-dark-700 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-primary-400 font-display">
            Preguntas Frecuentes
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
        
        <div className="overflow-y-auto max-h-[calc(80vh-100px)] p-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-dark-700 rounded-lg">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-dark-700 transition-colors"
                >
                  <span className="text-gray-100 font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-primary-400 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-dark-700 rounded-lg">
            <p className="text-gray-300 text-center">
              ¿No encontrás lo que buscás?{' '}
              <a
                href="https://wa.me/5493772506000?text=Hola,%20tengo%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                Contactanos por WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};