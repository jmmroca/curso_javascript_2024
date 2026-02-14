import Title from './Title'
import Subtitle from './Subtitle'

function TitleContainer({ titulo , subtitulo, imagen, imagenGrande }) {
  return (
    <>
        <Title titulo={titulo} imagen={imagen} imagenGrande={imagenGrande}/>
        <Subtitle subtitulo={subtitulo}/>
    </>
  )
}

export default TitleContainer