import React from 'react';
import { useState } from 'react';
import { dataCurso } from './data/dataCurso';

function BarraSuperior({paginaActual, setPaginaActual}) {

  const [paginaMaxima, _setPaginaMaxima] = useState(dataCurso.paginas.length);
  return (
    <div className='upperBar'>
        <button onClick={() => setPaginaActual(paginaActual > 1 ? paginaActual - 1 : 1)}>Anterior</button>
        <p>{paginaActual} de {paginaMaxima}</p>
        <button onClick={() => setPaginaActual(paginaActual < paginaMaxima ? paginaActual + 1 : paginaMaxima)}>Siguiente</button>  
    </div>
  )
}

export default BarraSuperior