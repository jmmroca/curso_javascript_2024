const htmlVariables4 = `
      <section>
        <div id="title-container">
          <div id="image">
            <img
              class="imagen-grande"
              src="/public/data_type_javascript.png"
              alt="tipos de datos javascript"
            />
          </div>
          <div id="text">Tipos de datos en JavaScript</div>
          <div id="logo-javascript">JS</div>
        </div>
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
            <tr class="prim">
              <td>
                <code class="language-javascript">number</code>
              </td>
              <td>Números (enteros, decimales, NaN, Infinity)</td>
              <td>
                <code class="language-javascript">42</code>, <code class="language-javascript">3.14</code>, <code class="language-javascript">NaN</code>
              </td>
              <td>
                <code class="language-javascript">"number"</code>
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code class="language-javascript">bigint</code>
              </td>
              <td>Números enteros muy grandes</td>
              <td>
                <code class="language-javascript">12345678901234567890n</code>
              </td>
              <td>
                <code class="language-javascript">"bigint"</code>
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code class="language-javascript">string</code>
              </td>
              <td>Texto/cadenas</td>
              <td>
                <code class="language-javascript">"Hola"</code>, <code class="language-javascript">'mundo'</code>
              </td>
              <td>
                <code class="language-javascript">"string"</code>
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code class="language-javascript">boolean</code>
              </td>
              <td>Verdadero/falso</td>
              <td>
                <code class="language-javascript">true</code>, <code class="language-javascript">false</code>
              </td>
              <td>
                <code class="language-javascript">"boolean"</code>
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code class="language-javascript">null</code>
              </td>
              <td>Valor nulo intencional</td>
              <td>
                <code class="language-javascript">null</code>
              </td>
              <td>
                <code class="language-javascript">"object"</code> ⚠️
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code class="language-javascript">undefined</code>
              </td>
              <td>Variable no asignada</td>
              <td>
                <code class="language-javascript">let x;</code>
              </td>
              <td>
                <code class="language-javascript">"undefined"</code>
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code class="language-javascript">symbol</code>
              </td>
              <td>Identificador único</td>
              <td>
                <code class="language-javascript">Symbol('id')</code>
              </td>
              <td>
                <code class="language-javascript">"symbol"</code>
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
                <tr class="no-prim">
                    <td><code class="language-javascript">object</code></td>
                    <td>Objetos, arrays, funciones, fechas</td>
                    <td>
                          <pre>
                                <code class="language-javascript">
          {}
                                </code>
                            </pre>
                            ,
                          <pre>
                                <code class="language-javascript">
          []
                                </code>
                          </pre>
                            ,
                          <pre>
                                <code class="language-javascript">
          ()=>{}
                                </code>
                          </pre>
                    </td>
                    <td><code class="language-javascript">"object"</code></td>
                </tr>
            </tbody>
        </table>
      </section>
      <section>
        
        <pre>
          <code class="language-javascript">
            let edad=42;
            typeof edad;              // "number"

            let saludo="hola";
            typeof saludo;              // "string"

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
            typeof funcion;       // "function"

            </code>
        </pre>

      </section>
    `;

export default htmlVariables4;
