import './Footer.css';

const IconPaw = () => (
  <svg width="16" height="16" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
    <ellipse cx="12" cy="20" rx="7" ry="10" />
    <ellipse cx="28" cy="12" rx="7" ry="10" />
    <ellipse cx="44" cy="12" rx="7" ry="10" />
    <ellipse cx="58" cy="20" rx="7" ry="10" />
    <path d="M32 28c-10 0-20 8-18 22 1 8 8 12 18 12s17-4 18-12c2-14-8-22-18-22z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__info">
          <div className="footer__marca">
            <span className="footer__marca-paw"><IconPaw /></span>
            PumaRED
          </div>
          <div className="footer__divider" />
          <p className="footer__copy">© 2026 PumaRED · Conservación del puma andino</p>
          <p className="footer__sub">Hecho con compromiso por la naturaleza.</p>
        </div>

        <a
          className="footer__wsp"
          href="https://wa.me/5493517186341"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWhatsApp />
          WhatsApp
        </a>
      </div>
    </footer>
  );
}

export default Footer;
