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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__marca">
        <span className="footer__marca-paw"><IconPaw /></span>
        PumeRED
      </div>
      <div className="footer__divider" />
      <p className="footer__copy">© 2026 PumaRED · Conservación del puma andino</p>
      <p className="footer__sub">Hecho con compromiso por la naturaleza.</p>
      
      <a
        href="https://wa.me/5493517186341"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsAppppp
      </a>
    </footer>
  );
}

export default Footer;
