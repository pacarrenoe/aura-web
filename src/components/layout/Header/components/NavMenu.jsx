const navigationLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Planes", href: "#planes" },
  { name: "Nuestra agencia", href: "#agencia" },
  { name: "Contacto", href: "#contacto" },
];

function NavMenu({ isOpen, closeMenu }) {
  return (
    <nav
      className={`main-nav ${isOpen ? "main-nav--open" : ""}`}
      aria-label="Navegación principal"
    >
      <ul className="nav-list">
        {navigationLinks.map((link, index) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={closeMenu}
              className={`nav-link ${
                index === 0 ? "nav-link--active" : ""
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;