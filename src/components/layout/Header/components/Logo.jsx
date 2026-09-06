import logoAura from "../../../../assets/icons/logo.png";

function Logo() {
  return (
    <a href="#inicio" className="logo" aria-label="AURA Agency - Inicio">
      <img
        src={logoAura}
        alt="AURA Agency"
        className="logo-image"
      />
    </a>
  );
}

export default Logo;