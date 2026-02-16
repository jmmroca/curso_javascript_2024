import React from 'react'

function Subtitle({ subtitulo }) {

  // TODO: crear componente que ejecute el codigo de prueba
  
  
  return (
    <>
        <div id="subtitle-container">
          <div id="text">{subtitulo}</div>
          <div id="logo-javascript"><img src="./public/logo-javascript.png" alt="logo-javascript" /></div>
        </div>
    </>
  )
}

export default Subtitle