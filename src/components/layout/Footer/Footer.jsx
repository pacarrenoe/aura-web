import Logo from "../Header/components/Logo";
import Icon from "../../ui/Icon";
import "./Footer.css";
function Footer(){return <footer className="footer"><div className="footer-inner"><Logo/><p>Estrategia · Contenido · Comunidad · Resultados</p><span><Icon name="pin" size={16}/> Chile</span><p>Marcas que inspiran, resultados que perduran.</p></div></footer>}
export default Footer;
