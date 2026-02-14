import React from 'react'

function Subtitle({ subtitulo }) {
  return (
    <>
        <div id="subtitle-container">
          <div id="text">{subtitulo}</div>
          <div id="logo-javascript">JS</div>
        </div>
    </>
  )
}

export default Subtitle