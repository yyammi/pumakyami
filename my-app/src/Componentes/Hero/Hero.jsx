import './Hero.css';
import Boton from '../Boton/Boton';

const IconPaw = () => (
  <svg width="14" height="14" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
    <ellipse cx="12" cy="20" rx="7" ry="10"/>
    <ellipse cx="28" cy="12" rx="7" ry="10"/>
    <ellipse cx="44" cy="12" rx="7" ry="10"/>
    <ellipse cx="58" cy="20" rx="7" ry="10"/>
    <path d="M32 28c-10 0-20 8-18 22 1 8 8 12 18 12s17-4 18-12c2-14-8-22-18-22z"/>
  </svg>
);

function Hero() {
  return (
    <header className="hero">
      <img
        src="/puma_hero.png"
        alt="Puma en su hábitat natural andino"
        className="hero__bg"
      />
      <div className="hero__overlay" />
      <div className="hero__accent-bar" />

      <div className="hero__content">
        <span className="hero__badge">
          <IconPaw /> Conservación activa
        </span>

        <h1 className="hero__title">
          Cada avistamiento<br />
          <mark>cuenta una historia</mark>
        </h1>

        <p className="hero__sub">
          Reportá la presencia del puma andino para protegerlo.
          Tu foto puede salvar una vida.
        </p>

        <Boton href="#registrar" variante="amarillo" tamaño="grande">
          Registrar avistamiento
        </Boton>
      </div>
    </header>
  );
}

export default Hero;
