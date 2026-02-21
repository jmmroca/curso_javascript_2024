import logoJs from './assets/logo-javascript.png';

function Subtitle({ subtitulo }) {
  
  return (
    <>
        <div id="subtitle-container">
          <div id="text">{subtitulo}</div>
          <div id="logo-javascript"><img src={logoJs} alt="logo-javascript" /></div>
        </div>
    </>
  )
}

export default Subtitle