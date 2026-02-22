// src/pages/CursoJavascript.jsx
import BarraSuperior from "../components/BarraSuperior";
import MainContainer from "../components/MainContainer";
import { useState } from "react";
import PageShell from "../components/PageShell";
import Footer from "../components/Footer";
function CursoJavascript() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [mostrarContainer, setMostrarContainer] = useState(true);
  return (
    <PageShell>
      <div className="page">
        <section>
          <h2 className="section-title">Curso de JavaScript</h2>
          <p className="section-sub">Avanza por las lecciones usando el panel superior.</p>
          <BarraSuperior
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
          />
          {mostrarContainer ? (
            <MainContainer paginaActual={paginaActual} />
          ) : (
            <p>parrafo</p>
          )}
        </section>
        <Footer />
      </div>
    </PageShell>
  );
}

export default CursoJavascript;
