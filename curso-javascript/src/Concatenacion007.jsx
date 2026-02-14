import BloqueCodigo from "./components/BloqueCodigo";
import TitleContainer from "./components/TitleContainer";

function Concatenacion007({ copySnippet }) {
  return (
    <>
      <section>
        <TitleContainer titulo={"Strings"} imagen={"./public/concatenacion_javascript.png"} subtitulo={"Concatenación en JavaScript"} imagenGrande={true}/>
        <p>
          En esta sección, aprenderemos sobre la forma de concatenar cadenas de texto en JavaScript.
        </p>
      </section>
      <section id="concatenacion-de-cadenas-en-javascript">
        <h2>Concatenación en JavaScript</h2>
        <p>
          La concatenación es el proceso de unir dos o más cadenas de texto para
          formar una nueva cadena. En JavaScript, las cadenas son inmutables,
          por lo que cada concatenación crea una nueva cadena sin modificar las
          originales.
        </p>
      </section>
      <section>
        <h2>
          1. Concatenación con el operador <code>+</code>
        </h2>
        <p>
          Es la forma más utilizada y sencilla. Consiste en usar el operador
          <code>+</code> entre cadenas o entre cadenas y variables.
        </p>
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="Concatenación con el operador +"
          codigo={`
        const nombre = "Ada";
        const saludo = "Hola, " + nombre + "!";
        console.log(saludo); // "Hola, Ada!"
        `}
        />
        <p>
          También se puede usar repetidamente para unir más de dos cadenas,
          aunque expresiones muy largas pueden volverse difíciles de leer.
        </p>
      </section>

      <section>
        <h2>
          2. Concatenación con <code>+=</code>
        </h2>
        <p>
          El operador <code>+=</code> permite añadir contenido a una cadena
          existente. Es útil cuando construimos una cadena paso a paso.
        </p>
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="Concatenación con el operador +="
          codigo={`
        let mensaje = "Resultado:";
        mensaje += " 10";
        mensaje += " puntos";
        console.log(mensaje); // "Resultado: 10 puntos"
        `}
        />
      </section>

      <section>
        <h2>
          3. Concatenación con <em>template literals</em>
        </h2>
        <p>
          Los <em>template literals</em> usan comillas invertidas (
          <code>`</code>) y permiten incrustar variables y expresiones con la
          sintaxis
          <code>{"{$expresion}"}</code>, haciendo el código más legible.
        </p>
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="Concatenación con template literals"
          codigo={`
        const nombre = "Ada";   
        const puntos = 10;
        const mensaje = "Hola, {$nombre}. Tienes {$puntos} puntos.";
        console.log(mensaje); // "Hola, Ada. Tienes 10 puntos."
        `}
        />
        <p>
          Esta forma es recomendada cuando la cadena es larga o cuando incluye
          muchas variables o saltos de línea.
        </p>
      </section>

      <section>
        <h2>
          4. Método <code>String.prototype.concat()</code>
        </h2>
        <p>
          El método <code>concat()</code> une una o más cadenas y devuelve una
          nueva sin modificar las originales. Se usa menos que el operador{" "}
          <code>+</code>, pero es una alternativa válida.
        </p>
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="Concatenación con el método concat()"
          codigo={`
        const texto1 = "Hola";
        const texto2 = " mundo";
        const resultado = texto1.concat(texto2, "!");
        console.log(resultado); // "Hola mundo!"
        `}
        />
      </section>

      <section>
        <h2>
          5. Concatenar arrays de cadenas con <code>join()</code>
        </h2>
        <p>
          Cuando tenemos muchas cadenas en un array, es más cómodo usar
          <code>join()</code> para unirlas con un separador específico.
        </p>
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="Concatenación con join()"
          codigo={`
        const partes = ["Hola", "mundo", "desde", "JavaScript"];
        const frase = partes.join(" ");
        console.log(frase); // "Hola mundo desde JavaScript"
        `}
        />
      </section>

      <section>
        <h2>6. Buenas prácticas</h2>
        <ul>
          <li>
            Usar <strong>template literals</strong> para cadenas largas o con
            muchas variables.
          </li>
          <li>
            Evitar cadenas muy largas con muchos <code>+</code> seguidos.
          </li>
          <li>
            Utilizar <code>join()</code> cuando concatenes muchos elementos de
            un array.
          </li>
        </ul>
      </section>
    </>
  );
}

export default Concatenacion007;
