
import { Routes, Route } from "react-router-dom";
import CursoJavascript from "./pages/CursoJavascript";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";

import '../src/css/app.css';
import '../src/css/home.css';

import Variables001 from "./Variables001";
import DetallesCursoJavascript from "./components/DetallesCursoJavascript";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/detalle-curso/javascript" element={<DetallesCursoJavascript />} />
      <Route path="/curso/javascript" element={<CursoJavascript />} />

      <Route path="/variables" element={<Variables001 />} />

      <Route path="*" element={<Home />} />
    </Routes>

  )
}

export default App
