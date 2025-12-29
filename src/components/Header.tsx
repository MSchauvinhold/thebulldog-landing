import { useState } from 'react';
//import { config } from '../config'; 

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    try {
      // Validar que sectionId sea seguro
      const validSections = ['inicio', 'guias', 'productos', 'contacto'];
      if (!validSections.includes(sectionId)) {
        console.warn('Invalid section ID:', sectionId);
        return;
      }
      
      const element = document.getElementById(sectionId);
      if (element && element.offsetTop !== undefined) {
        const offset = sectionId === 'guias' ? 250 : 120;
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      }
    } catch (error) {
      console.error('Error scrolling to section:', error);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-dark-800 border-b border-dark-700 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 w-64">
            <img 
              src="/logo.webp" 
              alt="Logo" 
              className="h-[6.25rem] w-[6.25rem] object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {/* Nombre de la empresa */}
            {/*<h1 className="text-xl font-bold text-primary-400 font-display">
              {config.businessName}
            </h1>*/}
          </div>

          {/* Desktop Menu - Centered */}
          <nav className="hidden md:flex space-x-12 flex-1 justify-center px-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-lg font-medium text-gray-200 hover:text-primary-400 transition-colors duration-300"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('guias')}
              className="text-lg font-medium text-gray-200 hover:text-primary-400 transition-colors duration-300"
            >
              Guías
            </button>
            <button 
              onClick={() => scrollToSection('productos')}
              className="text-lg font-medium text-gray-200 hover:text-primary-400 transition-colors duration-300"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-lg font-medium text-gray-200 hover:text-primary-400 transition-colors duration-300"
            >
              Contacto
            </button>
          </nav>

          {/* Spacer for balance */}
          <div className="hidden md:block w-64">
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto text-gray-300 hover:text-primary-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-dark-700 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-lg font-medium text-gray-200 hover:text-primary-400 transition-colors duration-300 text-left py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('guias')}
                className="text-lg font-medium text-gray-200 hover:text-primary-400 transition-colors duration-300 text-left py-2"
              >
                Guías
              </button>
              <button 
                onClick={() => scrollToSection('productos')}
                className="text-lg font-medium text-gray-200 hover:text-primary-400 transition-colors duration-300 text-left py-2"
              >
                Productos
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-lg font-medium text-gray-200 hover:text-primary-400 transition-colors duration-300 text-left py-2"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};