export const About = () => {
  return (
    <section 
      id="quienes-somos" 
      className="min-h-screen flex items-center justify-center px-4 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0.9)), url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
      }}
    >
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-400 font-display">
          Quiénes Somos
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            En <strong className="text-primary-400">The BullDog Growshop</strong>, somos apasionados por el cultivo urbano y la cultura cannábica. 
            Desde nuestros inicios, nos hemos dedicado a ofrecer productos de la más alta calidad para cultivadores 
            de todos los niveles.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Nuestro equipo está formado por expertos en cultivo que entienden las necesidades específicas de cada 
            proyecto. Ofrecemos desde fertilizantes orgánicos premium hasta accesorios artesanales únicos.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Creemos en la importancia de la educación y el cultivo responsable. Por eso, no solo vendemos productos, 
            sino que también brindamos asesoramiento personalizado para que logres los mejores resultados en tu cultivo.
          </p>
        </div>
      </div>
    </section>
  );
};