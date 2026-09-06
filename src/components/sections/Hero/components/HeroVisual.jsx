import bannerAura from "../../../../assets/icons/banner-aura.png";

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual-background">
        {/* Onda crema */}
        <svg
          className="hero-curve"
          viewBox="0 0 650 560"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M 0 0
              H 355
              C 345 80, 305 115, 250 155
              C 170 215, 150 305, 190 375
              C 225 440, 295 480, 355 560
              H 0
              Z
            "
          />
        </svg>

        {/* Onda salmón superior */}
        <div
          className="hero-orange-shape"
          aria-hidden="true"
        ></div>

        {/* Imagen principal */}
        <img
          src={bannerAura}
          alt="Computador, libros, teléfono y taza de AURA Agency"
          className="hero-image"
        />

        {/* Palabras laterales */}
        <div className="hero-keywords">
          <span>Estrategia</span>
          <span>Creatividad</span>
          <span>Contenido</span>
          <span>Comunidad</span>
          <span>Resultados</span>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;