// src/pages/CursoJavascript.jsx
import BarraSuperior from "../components/BarraSuperior";
import MainContainer from "../components/MainContainer";
import { useState } from "react";
import PageShell from "../components/PageShell";
function CursoJavascript() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [mostrarContainer, setMostrarContainer] = useState(true);
  return (
    <PageShell>
      <div className="page">
        <BarraSuperior
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
        />
        {mostrarContainer ? (
          <MainContainer paginaActual={paginaActual} />
        ) : (
          <p>parrafo</p>
        )}
      </div>
    </PageShell>
  );
}

export default CursoJavascript;
