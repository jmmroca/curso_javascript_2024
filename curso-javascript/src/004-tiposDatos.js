const htmlVariables4 = `
      <section>
        <div id="title-container">
          <div id="image">
            <img
              width="200"
              height="auto"
              style={{ width: "300px", height: "auto" }}
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
                <code>number</code>
              </td>
              <td>Números (enteros, decimales, NaN, Infinity)</td>
              <td>
                <code>42</code>, <code>3.14</code>, <code>NaN</code>
              </td>
              <td>
                <code>"number"</code>
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code>bigint</code>
              </td>
              <td>Números enteros muy grandes</td>
              <td>
                <code>12345678901234567890n</code>
              </td>
              <td>
                <code>"bigint"</code>
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code>string</code>
              </td>
              <td>Texto/cadenas</td>
              <td>
                <code>"Hola"</code>, <code>'mundo'</code>
              </td>
              <td>
                <code>"string"</code>
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code>boolean</code>
              </td>
              <td>Verdadero/falso</td>
              <td>
                <code>true</code>, <code>false</code>
              </td>
              <td>
                <code>"boolean"</code>
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code>null</code>
              </td>
              <td>Valor nulo intencional</td>
              <td>
                <code>null</code>
              </td>
              <td>
                <code>"object"</code> ⚠️
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code>undefined</code>
              </td>
              <td>Variable no asignada</td>
              <td>
                <code>let x;</code>
              </td>
              <td>
                <code>"undefined"</code>
              </td>
            </tr>
            <tr class="prim">
              <td>
                <code>symbol</code>
              </td>
              <td>Identificador único</td>
              <td>
                <code>Symbol('id')</code>
              </td>
              <td>
                <code>"symbol"</code>
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
                    <td><code>object</code></td>
                    <td>Objetos, arrays, funciones, fechas</td>
                    <td>
                          <pre>
                                <code>
                                  {}
                                </code>
                            </pre>
                            ,
                          <pre>
                                <code>
                                  []
                                </code>
                          </pre>
                            ,
                          <pre>
                                <code>
                                  ()=>{}
                                </code>
                          </pre>
                    </td>
                    <td><code>"object"</code></td>
                </tr>
            </tbody>
        </table>
      </section>
      <section>
        
        <pre>
          <code class="language-javascript">
            typeof 42;        // "number"
            typeof "hola";    // "string"
            typeof true;      // "boolean"
            typeof undefined; // "undefined"
            typeof null;      // "object"  (bug histórico)
            typeof {};        // "object"
            typeof [];        // "object"
            typeof function(){}; // "function"
          </code>
        </pre>

      </section>
    `;

export default htmlVariables4;
