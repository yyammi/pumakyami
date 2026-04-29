import './SobreNosotros.css';

function SobreNosotros() {
  return (
    <section className="section" id="quienes-somos">
      <div className="container">
        <div className="sobre">

          {/* ── Texto principal ── */}
          <div className="sobre__text">
            <span className="section-eyebrow">Quiénes somos</span>
            <h2 className="section-title">
              Guardianes del<br /><span>puma andino</span>
            </h2>

            <p>
              Somos un equipo interdisciplinario de biólogos, fotógrafos y
              voluntarios dedicados al monitoreo y conservación del{' '}
              <strong>puma andino</strong> (<em>Puma concolor</em>) en los
              ecosistemas de la cordillera.
            </p>
            <p>
              Esta plataforma permite a guardaparques, investigadores y
              ciudadanos registrar avistamientos con evidencia fotográfica.
              Cada imagen nos ayuda a <strong>mapear territorios</strong>,
              detectar conflictos y diseñar estrategias de protección basadas
              en datos reales.
            </p>

            {/* ── Stats ── */}
            <div className="stats">
              <div className="stat">
                <span className="stat__num">+30</span>
                <span className="stat__label">Años de trayectoria</span>
              </div>
              <div className="stat">
                <span className="stat__num">+300</span>
                <span className="stat__label">Voluntarios</span>
              </div>
              <div className="stat">
                <span className="stat__num">+1.000</span>
                <span className="stat__label">Animales rescatados</span>
              </div>
              <div className="stat">
                <span className="stat__num">53</span>
                <span className="stat__label">Especies de semillas nativas</span>
              </div>
            </div>
          </div>

          {/* ── Card lateral ── */}
          <div className="sobre__visual">
            <div className="sobre__card">
              <p className="sobre__card-title">¿Qué hacemos con tus fotos?</p>
              <ul className="sobre__card-list">
                <li>Geolocalización del avistamiento para mapas de presencia</li>
                <li>Identificación individual por patrones de pelaje</li>
                <li>Evaluación de salud y posibles conflictos con comunidades</li>
                <li>Alertas inmediatas si se detecta peligro para el animal</li>
                <li>Generación de informes para organismos de conservación</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
