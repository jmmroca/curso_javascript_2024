import BloqueCodigo from "./components/BloqueCodigo";
import TitleContainer from "./components/TitleContainer";

function TiposDatos004({ copySnippet }) {
  return (
    <>
      <section>
        <TitleContainer titulo={"Datos"} imagen={"./public/data_type_javascript.png"} subtitulo={"Tipos de datos en JavaScript"} imagenGrande={true}/>
        <p>
          En esta sección, vamos a conocer los distintos tipos de datos que
          puede contener cualquiera de nuestras variables en JavaScript.
        </p>
      </section>
      <section>
        <p>Tipos de datos en JavaScript:</p>
        <ul>
          <li>
            <a href="#primitivos">Primitivos.</a>
          </li>
          <li>
            <a href="#estructurales">Estructurales</a>
          </li>
        </ul>
      </section>

      <section id="primitivos">
        <h1>📊 Tipos de Datos en JavaScript</h1>
        <h2>1. TIPOS PRIMITIVOS (7 tipos)</h2>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Ejemplo</th>
              <th>typeof</th>
            </tr>
          </thead>
          <tbody>
            <tr className="prim">
              <td>
                <code className="language-javascript">number</code>
              </td>
              <td>Números (enteros, decimales, NaN, Infinity)</td>
              <td>
                <code className="language-javascript">42</code>,{" "}
                <code className="language-javascript">3.14</code>,{" "}
                <code className="language-javascript">NaN</code>
              </td>
              <td>
                <code className="language-javascript">"number"</code>
              </td>
            </tr>
            <tr className="prim">
              <td>
                <code className="language-javascript">bigint</code>
              </td>
              <td>Números enteros muy grandes</td>
              <td>
                <code className="language-javascript">
                  12345678901234567890n
                </code>
              </td>
              <td>
                <code className="language-javascript">"bigint"</code>
              </td>
            </tr>
            <tr className="prim">
              <td>
                <code className="language-javascript">string</code>
              </td>
              <td>Texto/cadenas</td>
              <td>
                <code className="language-javascript">"Hola"</code>,{" "}
                <code className="language-javascript">'mundo'</code>
              </td>
              <td>
                <code className="language-javascript">"string"</code>
              </td>
            </tr>
            <tr className="prim">
              <td>
                <code className="language-javascript">boolean</code>
              </td>
              <td>Verdadero/falso</td>
              <td>
                <code className="language-javascript">true</code>,{" "}
                <code className="language-javascript">false</code>
              </td>
              <td>
                <code className="language-javascript">"boolean"</code>
              </td>
            </tr>
            <tr className="prim">
              <td>
                <code className="language-javascript">null</code>
              </td>
              <td>Valor nulo intencional</td>
              <td>
                <code className="language-javascript">null</code>
              </td>
              <td>
                <code className="language-javascript">"object"</code> ⚠️
              </td>
            </tr>
            <tr className="prim">
              <td>
                <code className="language-javascript">undefined</code>
              </td>
              <td>Variable no asignada</td>
              <td>
                <code className="language-javascript">let x;</code>
              </td>
              <td>
                <code className="language-javascript">"undefined"</code>
              </td>
            </tr>
            <tr className="prim">
              <td>
                <code className="language-javascript">symbol</code>
              </td>
              <td>Identificador único</td>
              <td>
                <code className="language-javascript">Symbol('id')</code>
              </td>
              <td>
                <code className="language-javascript">"symbol"</code>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="estructurales">
        <h2>2. TIPO NO PRIMITIVO (1 tipo)</h2>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Ejemplo</th>
              <th>typeof</th>
            </tr>
          </thead>
          <tbody>
            <tr className="no-prim">
              <td>
                <code className="language-javascript">object</code>
              </td>
              <td>Objetos, arrays, funciones, fechas</td>
              <td>
                <pre>
                  <code className="language-javascript">{`{}`}</code>
                </pre>

                <pre>
                  <code className="language-javascript">{`[]`}</code>
                </pre>

                <pre>
                  <code className="language-javascript">{`()=>{}`}</code>
                </pre>
              </td>
              <td>
                <code className="language-javascript">"object"</code>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="1. Tipos primitivos"
          codigo={`
            let edad=42;
            typeof edad;            // "number"

            let saludo="hola";
            typeof saludo;          // "string"

            let isOrange=true;
            typeof isOrange;        // "boolean"

            let nombre;
            typeof nombre;          // "undefined"

            let miNombre=null;
            typeof miNombre;        // "object"  (bug histórico)

            let coche={
                marca:"Fiat",
                modelo:"500"
            };
            typeof coche;           // "object"

            let array=[  "rojo", "azul", "verde"];         
            typeof array;           // "object"

            let funcion=function(){};
            typeof funcion;       // "function"`}
        />
      </section>
    </>
  );
}

export default TiposDatos004;
