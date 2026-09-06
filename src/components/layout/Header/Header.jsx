import { useState } from "react";

import Logo from "./components/Logo";
import NavMenu from "./components/NavMenu";
import SocialLinks from "./components/SocialLinks";
import HeaderButton from "./components/HeaderButton";
import MenuToggle from "./components/MenuToggle";

import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <Logo />

        <NavMenu isOpen={isMenuOpen} closeMenu={closeMenu} />

        <SocialLinks />

        <HeaderButton />

        <MenuToggle isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}

export default Header;