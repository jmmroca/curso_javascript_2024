import React from "react";

function Variables() {
  return (
    <>
      <section>
        <div id="title-container">
          <div id="image">
            <img src="/variable.jpg" alt="variable" />
          </div>
          <div id="text">Variables en JavaScript</div>
          <div id="logo-javascript">JS</div>
        </div>
        <p>
          En esta sección, aprenderemos sobre las variables en JavaScript, cómo
          declararlas, inicializarlas y las buenas prácticas para nombrarlas.
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
        <p>
          La inicialización de una variable es asignar un valor a la variable
        </p>
        <p>Declaración de una variable global:</p>

        <pre>
          <code className="language-javascript">
            var nombreConVar = "Juan Perez"; // Declaración e inicialización de
            una variable
          </code>
        </pre>
        <p>para poder ver el valor de la variable en la consola</p>
        <pre>
          <code className="language-javascript">
            console.log(nombreConVar);
          </code>
        </pre>
        <p>
          Declaración e inicialización de una variable con let, que es una
          variable de bloque
        </p>
        <pre>
          <code id="codigo" className="language-javascript">
            let nombreConLet = "Juan Perez"; // Declaración e inicialización de
            una variable console.log(nombreConLet);
          </code>
        </pre>
        <p>
          Declaración e inicialización de una variable con const, que es una
          constante de bloque
        </p>
        <pre>
          <code className="language-javascript">
            const nombreConConst = "Juan Perez"; // Declaración e inicialización
            de una variable console.log(nombreConConst);
          </code>
        </pre>
        <p>
          si intentamos cambiar el valor de una constante, obtendremos un error
        </p>
        <pre>
          <code className="language-javascript">
            // nombreConConst = "Pedro Gomez"; // Esto generará un error si
            decomentamos esta línea
          </code>
        </pre>
        <p>Buenas prácticas para nombrar variables:</p>
        <p>
          1. Usar nombres descriptivos: el nombre de la variable debe indicar
          claramente su propósito
        </p>
        <pre>
          <code className="language-javascript">
            let edadUsuario = 30; // Buen nombre // let e = 30; // Mal nombre
            console.log(edadUsuario);
          </code>
        </pre>
        <p>
          2. Usar camelCase para múltiples palabras: la primera palabra en
          minúscula y las siguientes con la primera letra en mayúscula
        </p>
        <pre>
          <code className="language-javascript">
            let nombreCompletoUsuario = "Juan Perez"; // Buen uso de camelCase
            console.log(nombreCompletoUsuario); // let Nombre_completo_usuario =
            "Juan Perez"; // Mal uso de camelCase
          </code>
        </pre>
        <p>
          3. Evitar palabras reservadas: no usar palabras que tienen un
          significado especial en JavaScript
        </p>
        <pre>
          <code className="language-javascript">
            // let var = 10; // Mal uso, 'var' es una palabra reservada let
            variable = 10; // Buen uso console.log(variable);
          </code>
        </pre>
        <p>
          4. Ser consistente: usar un estilo consistente para nombrar variables
          en todo el código
        </p>
        <pre>
          <code className="language-javascript">
            let numeroDeTelefono = "123-456-7890"; // Consistente con camelCase
            console.log(numeroDeTelefono); // let numero_de_telefono =
            "123-456-7890"; // Inconsistente con camelCase
          </code>
        </pre>
        <p>
          5. Evitar abreviaturas innecesarias: usar nombres completos para mayor
          claridad
        </p>
        <pre>
          <code className="language-javascript">
            let direccionUsuario = "Calle Falsa 123"; // Buen nombre
            console.log(direccionUsuario); // let dirUsr = "Calle Falsa 123"; //
            Mal nombre
          </code>
        </pre>
        <p>
          6. Usar prefijos o sufijos cuando sea apropiado: para indicar el tipo
          de dato o el propósito
        </p>
        <pre>
          <code className="language-javascript">
            let isUsuarioActivo = true; // Buen uso del prefijo 'is' para
            indicar un booleano console.log(isUsuarioActivo); // let
            usuarioActivo = true; // Menos claro sin el prefijo 'is'
          </code>
        </pre>
        <p>
          7. Evitar el uso excesivo de mayúsculas y minúsculas: para evitar
          confusiones
        </p>
        <pre>
          <code className="language-javascript">
            let precioProducto = 100; // Buen uso console.log(precioProducto);
            // let PrecioProducto = 100; // Mal uso, puede causar confusión al
            leer el código
          </code>
        </pre>
        <p>
          Resumen: seguir estas buenas prácticas ayuda a mantener el código
          limpio, legible y fácil de mantener.
        </p>
      </section>
    </>
  );
}

export default Variables;
