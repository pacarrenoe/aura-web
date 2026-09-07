import bannerAura from "../../../assets/icons/banner-aura.png";
import Icon from "../../ui/Icon";
import "./About.css";
function About(){return <section className="about" id="agencia"><div className="about-photo"><img src={bannerAura} alt="Espacio creativo de AURA Agency"/></div><div className="about-copy"><p className="section-kicker">Más que redes sociales</p><h2>Creamos <em>conexiones</em><br/>que impulsan tu marca</h2><p>En AURA AGENCY creemos en el poder de las ideas, la estrategia y la creatividad para transformar marcas en historias que inspiran y venden.</p><div className="about-values"><div><Icon name="target"/><span>Estrategia<br/>con propósito</span></div><div><Icon name="users"/><span>Contenido<br/>auténtico</span></div><div><Icon name="chart"/><span>Crecimiento<br/>real</span></div></div></div><blockquote>“El marketing también<br/>es construir oportunidades.”</blockquote></section>}
export default About;
