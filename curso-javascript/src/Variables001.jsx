import React from 'react'

function Variables001() {
  return (
    <>
    <section>
      <div id="title-container">
        <div id="image">
          <img src="/public/variable.jpg" alt="" />
        </div>
        <div id="text">Variables en JavaScript</div>
        <div id="logo-javascript">JS</div>
      </div>
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

      <pre>
        <code className="language-javascript">
          var nombreConVar = "Juan Perez"; // Declaración e inicialización de
          una variable
        </code>
      </pre>
      <p>para poder ver el valor de la variable en la consola</p>
      <pre>
        <code className="language-javascript">console.log(nombreConVar);</code>
      </pre>
      <p>
        Declaración e inicialización de una variable con let, que es una
        variable de bloque
      </p>
      <pre>
        <code id="codigo" className="language-javascript">
          let nombreConLet = "Juan Perez"; // Declaración e inicialización de
          una variable
        </code>
      </pre>
      <pre>
        <code id="codigo" className="language-javascript">
         console.log(nombreConLet); // Visualizar el valor de la variable en consola
        </code>
      </pre>
      <p>
        Declaración e inicialización de una variable con const, que es una
        constante de bloque
      </p>
      <pre>
        <code className="language-javascript">
          const nombreConConst = "Juan Perez"; // Declaración e inicialización
          de una variable
        </code>
      </pre>
      <p>
        si intentamos cambiar el valor de una constante, obtendremos un error
      </p>
      <pre>
        <code className ="language-javascript">
          // nombreConConst = "Pedro Gomez"; // Esto generará un error si
          decomentamos esta línea
        </code>
      </pre>
    </section>
  </>
  )
}

export default Variables001;