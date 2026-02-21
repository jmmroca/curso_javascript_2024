import codeCampusLogo from './assets/code_campus_logo.png'
import concatenacionJs from './assets/concatenacion_javascript.png'
import dataTypeJs from './assets/data_type_javascript.png'
import logoJs from './assets/logo-javascript.png'
import operadores from './assets/operadores.png'
import variable from './assets/variable.jpg'
import scopeJs from './assets/Scope-en-JavaScript.jpg'

function Title( { titulo, imagen, imagenGrande } ) {
  return (
    <>
        <div id="title-container">
          <div id="image">
            <img
              className={imagenGrande ? "imagen-grande" : "imagen-chica"}
              src={imagen}
              alt={titulo}
            />
          </div>
        </div>
    </>
  )
}

export default Title