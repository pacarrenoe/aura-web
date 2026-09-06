function SocialLinks() {
  return (
    <div className="social-links" aria-label="Redes sociales de AURA Agency">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram de AURA Agency"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" className="social-fill" />
        </svg>
      </a>

      <a
        href="https://www.tiktok.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok de AURA Agency"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 4v10.2a4.2 4.2 0 1 1-3.3-4.1" />
          <path d="M14 4c.8 2.5 2.5 4 5 4.4" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn de AURA Agency"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 10v7" />
          <path d="M8 7v.01" />
          <path d="M12 17v-7" />
          <path d="M12 13a3 3 0 0 1 6 0v4" />
        </svg>
      </a>
    </div>
  );
}

export default SocialLinks;