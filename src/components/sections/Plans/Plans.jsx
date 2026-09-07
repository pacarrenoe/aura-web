import Icon from "../../ui/Icon";
import "./Plans.css";

const plans = [
  { name: "Esencial", icon: "leaf", intro: "Ideal para emprendedores que quieren comenzar su presencia digital.", features: ["Evaluación del perfil actual", "Planificación de contenido mensual", "Creación de piezas gráficas", "Publicaciones en redes sociales", "Redacción de textos y hashtags", "Programación y gestión de contenido"] },
  { name: "Avanzado", icon: "chart", featured: true, intro: "Para marcas que buscan crecer y tener contenido constante y estratégico.", features: ["Todo lo del Plan Esencial +", "Producción de contenido en foto y video", "Edición dinámica de reels", "Gestión de múltiples plataformas", "Informe mensual de métricas", "Recomendaciones de mejora", "Ajuste de estrategia según resultados"] },
  { name: "Integral", icon: "crown", intro: "Servicio completo de marketing digital y branding para marcas en expansión.", features: ["Todo lo del Plan Avanzado +", "Estrategia de branding", "Diseño de línea gráfica y plantillas", "Sesión de fotos mensual", "Grabación y edición profesional de reels", "Campañas de publicidad (Ads)", "Campañas colaborativas (influencers/marcas)"] },
];

const extras = [
  ["leaf", "Kit de marca"], ["camera", "Creación de logo"], ["target", "Shooting fotográfico"],
  ["chat", "Ebook / guía digital"], ["megaphone", "Campañas de Ads"], ["sparkle", "Y más..."]
];

function Plans() {
  return <section className="plans" id="planes">
    <div className="section-container">
      <header className="section-heading"><p className="section-kicker">Planes</p><h2>Soluciones digitales para cada <em>etapa de tu marca</em></h2><p>Contamos con planes flexibles y personalizables, diseñados para adaptarse a las necesidades y objetivos de tu negocio.<br/>Los valores se definen según la dinámica y requerimientos de cada proyecto.</p></header>
      <div className="plan-grid">{plans.map(plan => <article className={`plan-card ${plan.featured ? "plan-card--featured" : ""}`} key={plan.name}>
        <div className="plan-title"><Icon name={plan.icon}/><h3>{plan.name}</h3></div><p className="plan-intro">{plan.intro}</p>
        <ul>{plan.features.map(feature => <li key={feature}><span><Icon name="check" size={14}/></span>{feature}</li>)}</ul>
        <div className="plan-price"><Icon name="chat" size={25}/><span>Los valores se definen<br/>según tus necesidades.</span></div>
        <a className="plan-button" href="#contacto">Quiero este plan <b>→</b></a>
      </article>)}</div>
      <div className="extras" id="servicios"><div className="extras-heading"><Icon name="sparkle" size={36}/><div><h3>Servicios adicionales</h3><p>Potencia tu plan con servicios específicos según tus objetivos.</p></div></div><div className="extras-grid">{extras.map(([icon, label]) => <div className="extra-card" key={label}><Icon name={icon} size={25}/><span>{label}</span></div>)}</div><p className="extras-note">Todos los planes<br/>son personalizables<br/>según tus necesidades</p></div>
    </div>
  </section>;
}
export default Plans;
