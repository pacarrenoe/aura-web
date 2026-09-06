const services = [
  {
    name: "Estrategia digital",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 26V17h5v9M14 26V11h5v15M23 26V5h5v21" />
      </svg>
    ),
  },
  {
    name: "Contenido que conecta",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 4a9 9 0 0 0-5.5 16.1V25h11v-4.9A9 9 0 0 0 16 4Z" />
        <path d="M12 28h8M16 1v1M5.5 6l1.5 1M26.5 6 25 7M2 16h2M28 16h2" />
      </svg>
    ),
  },
  {
    name: "Producción audiovisual",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 10h22v17H5z" />
        <path d="m11 10 2-4h6l2 4" />
        <circle cx="16" cy="18.5" r="5" />
      </svg>
    ),
  },
  {
    name: "Gestión de redes sociales",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 27S5 21 5 12a6 6 0 0 1 11-3.3A6 6 0 0 1 27 12c0 9-11 15-11 15Z" />
      </svg>
    ),
  },
  {
    name: "Resultados medibles",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 27h23M7 24v-8h5v8M15 24V11h5v13M23 24V5h5v19" />
        <path d="m7 12 7-6 5 3 8-7" />
      </svg>
    ),
  },
];

function HeroServices() {
  return (
    <div className="hero-services" aria-label="Servicios principales">
      {services.map((service) => (
        <article className="hero-service" key={service.name}>
          <div className="hero-service-icon">{service.icon}</div>
          <p>{service.name}</p>
        </article>
      ))}
    </div>
  );
}

export default HeroServices;