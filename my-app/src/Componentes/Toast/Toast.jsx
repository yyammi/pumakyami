import { useState } from 'react';
import './Toast.css';

const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconX = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ── Toast individual ── */
function Toast({ mensaje, tipo, onCerrar }) {
  return (
    <div className={`toast toast--${tipo}`} role="alert">
      <span className="toast__icono">
        {tipo === 'exito' ? <IconCheck /> : <IconX />}
      </span>
      <span className="toast__msg">{mensaje}</span>
      <button className="toast__cerrar" onClick={onCerrar} aria-label="Cerrar notificación">
        <IconX />
      </button>
    </div>
  );
}

/* ── Contenedor de toasts ── */
export function ToastContainer({ toasts, onCerrar }) {
  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((t) => (
        <Toast
          key={t.id}
          mensaje={t.mensaje}
          tipo={t.tipo}
          onCerrar={() => onCerrar(t.id)}
        />
      ))}
    </div>
  );
}

/* ── Hook para manejar toasts ── */
export function useToasts() {
  const [toasts, setToasts] = useState([]);

  const quitar = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  const agregar = (mensaje, tipo = 'exito') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, mensaje, tipo }]);
    setTimeout(() => quitar(id), 5500);
  };

  return { toasts, agregar, quitar };
}

export default Toast;
