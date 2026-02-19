// import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import CursoJavascript from "./pages/CursoJavascript";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";

import './App.css';
import "../public/home.css";
import Variables001 from "./Variables001";

function App() {

  // const [paginaActual, setPaginaActual] = useState(1);
  // const [mostrarContainer, setMostrarContainer] = useState(true);
  return (
    // <>
    //   <MenuPrincipal />
    //   <BarraSuperior paginaActual={paginaActual} setPaginaActual={setPaginaActual} />
    //   <BotonMostarContainer mostrarContainer={mostrarContainer} setMostrarContainer={setMostrarContainer} />
    //   {mostrarContainer ?<MainContainer paginaActual={paginaActual}/>:<Variable />}
    //   <Footer />
    // </>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curso-javascript/home" element={<Home />} />
      <Route path="/curso-javascript/cursos" element={<Cursos />} />
      <Route path="/curso-javascript/variables" element={<Variables001 />} />

      <Route path="*" element={<Home />} />
    </Routes>

  )
}

export default App
