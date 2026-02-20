
import { Routes, Route } from "react-router-dom";
import CursoJavascript from "./pages/CursoJavascript";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";

import './css/app.css';
import "./css/home.css";
import Variables001 from "./Variables001";
import DetallesCursoJavascript from "./components/DetallesCursoJavascript";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/curso-javascript/detalle-curso/javascript" element={<DetallesCursoJavascript />} />
      <Route path="/curso-javascript/curso/javascript" element={<CursoJavascript />} />

      <Route path="/curso-javascript/home" element={<Home />} />
      <Route path="/curso-javascript/cursos" element={<Cursos />} />
      <Route path="/curso-javascript/variables" element={<Variables001 />} />

      <Route path="*" element={<Home />} />
    </Routes>

  )
}

export default App
