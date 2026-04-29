import './Navbar.css';

const IconPaw = () => (
  <svg width="18" height="18" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
    <ellipse cx="12" cy="20" rx="7" ry="10"/>
    <ellipse cx="28" cy="12" rx="7" ry="10"/>
    <ellipse cx="44" cy="12" rx="7" ry="10"/>
    <ellipse cx="58" cy="20" rx="7" ry="10"/>
    <path d="M32 28c-10 0-20 8-18 22 1 8 8 12 18 12s17-4 18-12c2-14-8-22-18-22z"/>
  </svg>
);

function Navbar() {
  return (
    <nav className="nav" role="navigation" aria-label="Navegación principal">
      <div className="nav__brand">
        <span className="nav__paw"><IconPaw /></span>
        PumaKyami
      </div>
      <ul className="nav__links">
        <li><a href="#quienes-somos">Nosotros</a></li>
        <li>
          <a href="https://pumakawa.org/"  target="_blank" rel="noopener noreferrer">Pumakawa
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
