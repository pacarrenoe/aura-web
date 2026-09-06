function HeroButtons() {
  return (
    <div className="hero-buttons">
      <a href="#planes" className="hero-button hero-button--primary">
        Conoce nuestros planes
        <span aria-hidden="true">→</span>
      </a>

      <a href="#contacto" className="hero-button hero-button--secondary">
        Hablemos
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export default HeroButtons;