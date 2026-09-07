const paths = {
  leaf: <><path d="M20 4C11 4 6 9 6 17c8 1 14-4 14-13Z"/><path d="M5 21c3-6 7-9 13-12"/></>,
  chart: <><path d="M5 20v-5h4v5M11 20v-9h4v9M17 20V6h4v14"/><path d="M4 22h19"/></>,
  crown: <><path d="m4 8 4 4 4-7 4 7 4-4-2 11H6L4 8Z"/><path d="M7 22h10"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  chat: <path d="M20 15a4 4 0 0 1-4 4H9l-5 3 1.5-5A8 8 0 1 1 20 15Z"/>,
  camera: <><path d="M4 8h4l2-3h4l2 3h4v12H4Z"/><circle cx="12" cy="14" r="4"/></>,
  megaphone: <><path d="m4 13 13-6v10L4 13Z"/><path d="m7 14 2 6h3l-2-7M20 9v6"/></>,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m12 12 8-8"/></>,
  users: <><circle cx="9" cy="9" r="3"/><circle cx="17" cy="9" r="3"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6M13 15c1-.7 2-1 4-1 3 0 5 2 5 6"/></>,
  sparkle: <><path d="M12 2c0 6-3 9-8 10 5 1 8 4 8 10 0-6 3-9 8-10-5-1-8-4-8-10Z"/></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
};

function Icon({ name, size = 28 }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default Icon;
