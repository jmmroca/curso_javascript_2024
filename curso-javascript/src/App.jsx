import { useState } from 'react';
import MenuPrincipal from './components/MenuPrincipal';
import BarraSuperior from './components/BarraSuperior';
import MainContainer from './components/MainContainer';
import Variable from './components/Variable';
import BotonMostarContainer from './components/BotonMostarContainer';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [mostrarContainer, setMostrarContainer] = useState(true);
  return (
    <>
      <MenuPrincipal />
      <BarraSuperior paginaActual={paginaActual} setPaginaActual={setPaginaActual} />
      <BotonMostarContainer mostrarContainer={mostrarContainer} setMostrarContainer={setMostrarContainer} />
      {mostrarContainer ?<MainContainer paginaActual={paginaActual}/>:<Variable />}
      <Footer />
    </>
  )
}

export default App
