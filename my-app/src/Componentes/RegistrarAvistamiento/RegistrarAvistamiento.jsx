import { useRef, useState, useCallback } from 'react';
import './RegistrarAvistamiento.css';
import Boton from '../Boton/Boton';

const IconCamera = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

const IconUpload = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16"/>
    <line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>
);

const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

function TarjetaCamara({ onUpload }) {
  const ref = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      onUpload(null, 'El archivo debe ser una imagen.');
      return;
    }
    onUpload(file, null);
  };

  return (
    <div className="upload-card upload-card--camara">
      <div className="upload-card__icon"><IconCamera /></div>
      <h3 className="upload-card__title">Tomar foto</h3>
      <p className="upload-card__desc">
        Abrí la cámara de tu dispositivo y capturá el avistamiento en tiempo real.
      </p>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: 'none' }}
        onChange={(e) => handleFile(e.target.files[0])}
      />
      <Boton variante="naranja" onClick={() => ref.current.click()}>
        <IconCamera /> Abrir cámara
      </Boton>
    </div>
  );
}

function TarjetaArchivo({ onUpload }) {
  const ref = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      onUpload(null, 'El archivo debe ser una imagen.');
      return;
    }
    onUpload(file, null);
  };

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  }, []);

  return (
    <div
      className={`upload-card upload-card--archivo ${dragging ? 'upload-card--dragging' : ''}`}
      onDrop={onDrop}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
    >
      <div className="upload-card__icon"><IconUpload /></div>
      <h3 className="upload-card__title">Subir archivo</h3>
      <p className="upload-card__desc">
        Arrastrá una imagen aquí o hacé clic para seleccionarla desde tu dispositivo.
      </p>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => handleFile(e.target.files[0])}
      />
      <Boton variante="amarillo" onClick={() => ref.current.click()}>
        <IconUpload /> Seleccionar imagen
      </Boton>

      {dragging && (
        <div className="upload-card__drop-label">Soltá aquí</div>
      )}
    </div>
  );
}


function OverlayCargando() {
  return (
    <div className="upload-overlay" role="status" aria-label="Subiendo imagen">
      <div className="upload-overlay__ring" />
      <span className="upload-overlay__text">Subiendo imagen…</span>
    </div>
  );
}


function RegistrarAvistamiento({ onUpload, cargando }) {
  return (
    <>
      {cargando && <OverlayCargando />}

      <section className="section section--alt" id="registrar">
        <div className="container">
          <span className="section-eyebrow">Registrar avistamiento</span>
          <h2 className="section-title">
            Subí tu <span>foto</span>
          </h2>
          <p className="section-body">
            Las imágenes son revisadas por nuestro equipo de manera confidencial.
            Tu aportación no será visible públicamente. Una vez recibida, actuamos de inmediato.
          </p>

          <div className="registrar-grid">
            <TarjetaCamara  onUpload={onUpload} />
            <TarjetaArchivo onUpload={onUpload} />
          </div>

          <div className="upload-privacidad">
            <span className="upload-privacidad__icon"><IconLock /></span>
            Las fotos no son públicas. Son procesadas internamente por el equipo de Pumakawa.
          </div>
        </div>
      </section>
    </>
  );
}

export default RegistrarAvistamiento;
