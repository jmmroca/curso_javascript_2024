import BloqueCodigo from "./components/BloqueCodigo";
import TitleContainer from "./components/TitleContainer";
import variable from '../assets/variable.jpg'

function Variables001({ copySnippet }) {
  return (
    <>
    <section>
      <TitleContainer titulo={"Variables"} imagen={variable} subtitulo={"Variables en JavaScript"} imagenGrande={false}/>
      <p>
        En esta sección, aprenderemos sobre las variables en JavaScript, cómo
        declararlas, inicializarlas.
      </p>
      <p>También veremos la diferencia entre null y undefined.</p>
    </section>
    <section>
      <p>¿Qué es una variable?</p>
      <p>Una variable es un espacio en memoria que almacena un valor</p>
      <p>¿Cómo declarar una variable?</p>
      <p>
        La declaración de una variable se puede hacer con las palabras clave:
      </p>
        <ul>
          <li>var (desaconsejado por los desarrolladores por obsoleto)</li>
          <li>let</li>
          <li>const</li>
        </ul>
      <p>La inicialización de una variable es asignar un valor a la variable</p>
      <p>Declaración de una variable global:</p>

      <BloqueCodigo
        copySnippet={copySnippet}
        titulo="Declaración e inicialización de una variable con var, que es una variable global"
        codigo={`
          var nombreConVar = "Juan Perez"; // Declaración e inicialización de una variable
          `}
      />    

      
      <p>para poder ver el valor de la variable en la consola</p>
      <BloqueCodigo
        copySnippet={copySnippet}
        titulo="Visualizar el valor de la variable en consola"
        codigo={`
          var nombreConVar = "Juan Perez"; // Declaración e inicialización de una variable
          console.log(nombreConVar); // Visualizar el valor de la variable en consola
          `}
      />
      <p>
        Declaración e inicialización de una variable con let, que es una
        variable de bloque
      </p>
      <BloqueCodigo
        copySnippet={copySnippet}
        titulo="Declaración e inicialización de una variable con let, que es una variable de bloque"
        codigo={`
          let nombreConLet = "Juan Perez"; // Declaración e inicialización de una variable
          console.log(nombreConLet); // Visualizar el valor de la variable en consola`}
      />
      <p>
        Declaración e inicialización de una variable con const, que es una
        constante de bloque
      </p>
      <BloqueCodigo
        copySnippet={copySnippet} 
        titulo="Declaración e inicialización de una variable con const, que es una constante de bloque"
        codigo={`
          const nombreConConst = "Juan Perez"; // Declaración e inicialización de una variable
          console.log(nombreConConst); // Visualizar el valor de la variable en consola`}
      />
      <p>
        si intentamos cambiar el valor de una constante, obtendremos un error
      </p>
      <BloqueCodigo
        copySnippet={copySnippet}
        titulo="Intentar cambiar el valor de una constante"
        codigo={`
          const nombreConConst = "Juan Perez"; // Declaración e inicialización de una variable
          console.log(nombreConConst); // Visualizar el valor de la variable en consola
          // nombreConConst = "Pedro Gomez"; // Esto generará un error si descomentamos esta línea`}
      />  
    </section>
  </>
  )
}

export default Variables001;