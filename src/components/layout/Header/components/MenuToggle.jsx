function MenuToggle({ isOpen, toggleMenu }) {
  return (
    <button
      className={`menu-toggle ${isOpen ? "menu-toggle--open" : ""}`}
      type="button"
      onClick={toggleMenu}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú de navegación"}
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default MenuToggle;