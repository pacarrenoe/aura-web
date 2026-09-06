import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <div className="hero-content">
      <p className="hero-eyebrow">
        Estrategia <span>•</span> Contenido <span>•</span> Resultados
      </p>

      <h1 className="hero-title">
        <span className="hero-title-orange">Tu marca,</span>
        <span className="hero-title-blue">en su mejor versión</span>
      </h1>

      <p className="hero-description">
        En <strong>AURA Agency</strong> ayudamos a marcas y emprendimientos a
        crecer en el mundo digital a través de estrategias de contenido,
        gestión de redes sociales, publicidad y diseño visual que conectan y
        generan resultados reales.
      </p>

      <HeroButtons />
    </div>
  );
}

export default HeroContent;