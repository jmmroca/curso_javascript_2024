// src/pages/CursoJavascript.jsx
import MenuPrincipal from "../components/MenuPrincipal";
import BarraSuperior from "../components/BarraSuperior";
import MainContainer from "../components/MainContainer";
import Variable from "../components/Variable";
import { useState } from "react";
import LogoHeader from "../components/LogoHeader";
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
          <Variable />
        )}
      </div>
    </PageShell>
  );
}

export default CursoJavascript;
