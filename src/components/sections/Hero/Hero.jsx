import HeroContent from "./components/HeroContent";
import HeroServices from "./components/HeroServices";
import HeroVisual from "./components/HeroVisual";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        <div className="hero-left">
          <HeroContent />
          <HeroServices />
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;