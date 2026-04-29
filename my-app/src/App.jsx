import { useState } from 'react';
import './index.css';
import './App.css';

import Navbar from './Componentes/Navbar/Navbar';
import Hero from './Componentes/Hero/Hero';
import SobreNosotros from './Componentes/SobreNosotros/SobreNosotros';
import RegistrarAvistamiento from './Componentes/RegistrarAvistamiento/RegistrarAvistamiento';
import Footer from './Componentes/Footer/Footer';
import { ToastContainer, useToasts } from './Componentes/Toast/Toast';

function App() {
  const { toasts, agregar, quitar } = useToasts();
  const [cargando, setCargando] = useState(false);

  const handleUpload = (archivo, error) => {
    if (error) {
      agregar(error, 'error');
      return;
    }

    
    setCargando(true);

    // Simula el envío al servidor (reemplazar con fetch/axios real)
    setTimeout(() => {
      setCargando(false);
      agregar(
        `"${archivo.name}" fue subido correctamente. ¡Gracias por tu avistamiento!`,
        'exito'
      );
    }, 1600);
  };

  return (
    <>
      <ToastContainer toasts={toasts} onCerrar={quitar} />

      <Navbar />

      <main>
        <Hero />

        {/* ── Layout de dos columnas ── */}
        <div className="layout-dos-columnas">
          {/* Columna izquierda: scrollable */}
          <div className="col-contenido">
            <SobreNosotros />
          </div>

          {/* Columna derecha: sticky — siempre visible */}
          <aside className="col-sticky">
            <RegistrarAvistamiento onUpload={handleUpload} cargando={cargando} />
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;