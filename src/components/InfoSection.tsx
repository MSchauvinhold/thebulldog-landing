import { useState, useEffect } from 'react';

const infoCards = [
  {
    id: 1,
    title: "Buenas prácticas de cultivo",
    content: "Mantén temperatura 20-26°C, humedad controlada y ventilación constante para crecimiento óptimo.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Consejos para principiantes",
    content: "Comienza con variedades resistentes y sustratos de calidad. La paciencia es fundamental.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21A7,7 0 0,1 14,26H10A7,7 0 0,1 3,19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M12,4A0,0 0 0,0 12,4A0,0 0 0,0 12,4M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Uso correcto de fertilizantes",
    content: "Aplica según la fase: nitrógeno en crecimiento, fósforo y potasio en floración.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M11,8C10.4,8 10,7.6 10,7C10,6.4 10.4,6 11,6C11.6,6 12,6.4 12,7C12,7.6 11.6,8 11,8Z"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Errores comunes al cultivar",
    content: "Evita exceso de riego, falta de ventilación y uso excesivo de nutrientes.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
      </svg>
    )
  },
  {
    id: 5,
    title: "Iluminación y fotoperiodo",
    content: "18/6 horas para crecimiento vegetativo, 12/12 para floración. Usa temporizadores.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"/>
      </svg>
    )
  },
  {
    id: 6,
    title: "Riego y control de humedad",
    content: "Riega cuando el sustrato esté seco. Mantén humedad 40-60% según la fase.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25S18,10 18,14A6,6 0 0,1 12,20Z"/>
      </svg>
    )
  },
  {
    id: 7,
    title: "Etapas del cultivo",
    content: "Germinación, plántula, vegetativo, pre-floración y floración. Cada fase requiere cuidados específicos.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/>
      </svg>
    )
  },
  {
    id: 8,
    title: "Cultivo responsable y educación",
    content: "Cultiva de forma legal, responsable y sostenible. Comparte conocimiento con la comunidad.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
      </svg>
    )
  }
];

export const InfoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoscroll cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % infoCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % infoCards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + infoCards.length) % infoCards.length);
  };

  const getCardStyles = (index: number) => {
    const distance = Math.abs(index - currentIndex);
    const isCenter = distance === 0;
    const isAdjacent = distance === 1;
    
    if (isCenter) {
      return 'scale-100 opacity-100 z-10 shadow-2xl';
    } else if (isAdjacent) {
      return 'scale-90 opacity-60 blur-[0.5px]';
    } else {
      return 'scale-85 opacity-50 blur-[0.5px]';
    }
  };

  return (
    <section id="guias" className="py-20 px-4 bg-dark-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-400 font-display">
          Guías de Cultivo
        </h2>
        
        {/* Desktop: 3 cards centrales con foco */}
        <div className="hidden md:block relative">
          <div className="flex justify-center items-center space-x-8 overflow-hidden px-20">
            {infoCards.map((card, index) => {
              const isVisible = Math.abs(index - currentIndex) <= 2;
              return (
                <div
                  key={card.id}
                  className={`transition-all duration-700 ease-in-out ${
                    isVisible ? 'block' : 'hidden'
                  } ${getCardStyles(index)}`}
                >
                  <div className="bg-dark-700 border border-dark-600 rounded-xl p-8 w-80 h-72 flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-primary-400 mb-6 flex justify-center">
                      <div className="transform scale-110">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-4 text-center">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-center flex-1">
                      {card.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flechas discretas */}
          <button
            onClick={prevCard}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-400 transition-colors p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextCard}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-400 transition-colors p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores discretos */}
          <div className="flex justify-center mt-12 space-x-3">
            {infoCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: 1 card centrada */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {infoCards.map((card) => (
                <div
                  key={card.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-dark-700 border border-dark-600 rounded-xl p-8 shadow-lg">
                    <div className="text-primary-400 mb-6 flex justify-center">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-4 text-center">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-center">
                      {card.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flechas mobile */}
          <button
            onClick={prevCard}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 text-gray-400 hover:text-primary-400 transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextCard}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-gray-400 hover:text-primary-400 transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores mobile */}
          <div className="flex justify-center mt-8 space-x-2">
            {infoCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};