export const Hero = () => {
  const scrollToProducts = () => {
    try {
      const element = document.getElementById('productos');
      if (element && element.offsetTop !== undefined) {
        window.scrollTo({
          top: element.offsetTop - 120,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      console.error('Error scrolling to products:', error);
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center px-4 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/img/bannerINICIO.webp')`
      }}
    >
      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-100 font-display">
          Bienvenido a <span className="text-primary-400">The BullDog</span> Growshop
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Tu growshop de confianza. De cultivador para cultivadores.
        </p>
        
        <div className="text-lg md:text-xl text-gray-300 mb-8 space-y-4 leading-relaxed">
          <p>
            En <strong className="text-primary-400">The BullDog Growshop</strong> somos apasionados por el cultivo urbano y la cultura cannábica. 
            Desde nuestros inicios nos dedicamos a ofrecer productos de alta calidad para cultivadores de todos los niveles, 
            combinando experiencia, asesoramiento personalizado y compromiso con el cultivo responsable.
          </p>
          
          <p>
            Nuestro equipo está formado por especialistas que entienden las necesidades reales de cada cultivo. 
            Ofrecemos fertilizantes premium, sustratos seleccionados y accesorios esenciales para que logres los mejores resultados, 
            acompañándote en cada etapa del proceso.
          </p>
        </div>
        
        <button 
          onClick={scrollToProducts}
          className="btn-primary text-lg px-8 py-4"
        >
          Ver Productos
        </button>
      </div>
    </section>
  );
};