import { useState } from 'react';
import MenuPrincipal from './components/MenuPrincipal'
import BarraSuperior from './components/BarraSuperior'
import MainContainer from './components/MainContainer'
import './App.css'

function App() {

  const [paginaActual, setPaginaActual] = useState(1);

  return (
    <>
      <MenuPrincipal />
      <BarraSuperior paginaActual={paginaActual} setPaginaActual={setPaginaActual} />
      <MainContainer paginaActual={paginaActual}/>
    </>
  )
}

export default App
