// src/pages/CursoJavascript.jsx
import MenuPrincipal from "../components/MenuPrincipal";
import BarraSuperior from "../components/BarraSuperior";
import MainContainer from "../components/MainContainer";
import Variable from "../components/Variable";
import Footer from "../components/Footer";
import { useState } from "react";
import LogoHeader from "../components/LogoHeader";
function CursoJavascript() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [mostrarContainer, setMostrarContainer] = useState(true);
  return (
    <>
      <div className="page">
        <LogoHeader />
        <MenuPrincipal />
        <BarraSuperior
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
        />
        {mostrarContainer ? (
          <MainContainer paginaActual={paginaActual} />
        ) : (
          <Variable />
        )}
        <Footer />
      </div>
    </>
  );
}

export default CursoJavascript;
