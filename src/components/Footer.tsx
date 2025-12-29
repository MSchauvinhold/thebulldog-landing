import { useState } from 'react';
import { config } from '../config';
import { FAQModal } from './FAQModal';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';
import { TermsConditionsModal } from './TermsConditionsModal';

export const Footer = () => {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const scrollToProducts = (category?: string) => {
    try {
      const element = document.getElementById('productos');
      if (element && element.offsetTop !== undefined) {
        window.scrollTo({
          top: element.offsetTop - 120,
          behavior: 'smooth'
        });
        
        // Simular filtro por categoría después del scroll
        if (category) {
          setTimeout(() => {
            // Mapear "Accesorios" a múltiples categorías
            const event = new CustomEvent('filterProducts', { detail: category });
            window.dispatchEvent(event);
          }, 500);
        }
      }
    } catch (error) {
      console.error('Error scrolling to products:', error);
    }
  };

  const scrollToAbout = () => {
    try {
      const element = document.getElementById('inicio');
      if (element && element.offsetTop !== undefined) {
        window.scrollTo({
          top: element.offsetTop - 120,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      console.error('Error scrolling to about:', error);
    }
  };

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Descripción de la marca */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-primary-400 font-display mb-4">
              {config.businessName}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Tu growshop de confianza especializado en productos premium para el cultivo urbano. 
              Ofrecemos asesoramiento personalizado y productos de la más alta calidad.
            </p>
            <div className="flex space-x-4">
              <a
                href={config.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${config.whatsappNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToProducts('Fertilizantes')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Fertilizantes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToProducts('Sustratos')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Sustratos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToProducts('Accesorios')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Accesorios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openWhatsApp('Hola, quisiera pedir asesoramiento')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Asesoramiento
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openWhatsApp('Hola, quería consultar sobre envíos y costos')}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Envíos
                </button>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={scrollToAbout}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsFAQOpen(true)}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Madariaga 1111</p>
              <p>Paso de los Libres, Corrientes, Argentina</p>
              <p className="mt-3">
                <a href={`tel:${config.whatsappNumber}`} className="hover:text-primary-400 transition-colors">
                  {config.whatsappNumber}
                </a>
              </p>
              <p>
                <a href="mailto:info@thebulldoggrowshop.com" className="hover:text-primary-400 transition-colors">
                  info@thebulldoggrowshop.com
                </a>
              </p>
              <div className="mt-3">
                <p className="text-xs">Horarios:</p>
                <p className="text-xs">Lun - Vie: 10:30 a 12:30 / 16:00 a 20:00</p>
                <p className="text-xs">Sáb: 15:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright y links legales */}
        <div className="border-t border-dark-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {config.businessName}. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Política de Privacidad
              </button>
              <button 
                onClick={() => setIsTermsOpen(true)}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <FAQModal isOpen={isFAQOpen} onClose={() => setIsFAQOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsConditionsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
};