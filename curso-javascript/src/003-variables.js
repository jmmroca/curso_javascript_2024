const htmlVariables3 = `
      <section>
        <div id="title-container">
          <div id="image">
            <img src="/public/variable.jpg" alt="" />
          </div>
          <div id="text">Variables III en JavaScript</div>
          <div id="logo-javascript">JS</div>
        </div>
        <p>
          En esta sección, vamos a aprender algo más sobre las variables en
          JavaScript, sobre como seguir las buenas prácticas para nombrarlas.
        </p>
      </section>
      <section>
        <p>Reglas para nombrar variables en JavaScript:</p>
        <ul>
          <li>
            <a href="#starts-with-a-letter">
              Las variables deben comenzar con una letra (a-z, A-Z), un signo de
              dólar ($) o un guion bajo (_).
            </a>
          </li>
          <li>
            <a href="#cannot-start-with-a-number">
              No pueden comenzar con un número (0-9).
            </a>
          </li>
          <li>
            <a href="#cannot-contain-spaces">
              Pueden contener letras, números, signos de dólar y guiones bajos.
            </a>
          </li>
          <li>
            <a href="#cannot-contain-special-characters">
              No pueden contener espacios ni caracteres especiales como @, #, %,
              etc.
            </a>
          </li>
          <li>
            <a href="#cannot-be-keywords">
              No pueden ser palabras reservadas de JavaScript (como "var",
              "let", "const", "if", "else", etc.).
            </a>
          </li>
          <li>
            <a href="#case-sensitive">
              Son sensibles a mayúsculas y minúsculas (por ejemplo, "miVariable"
              y "mivariable" son diferentes).
            </a>
          </li>
        </ul>
        <p>Reglas específicas para var, let y const:</p>
        <ul>
          <li>
            <a href="#let-no-duplicate-names">
              let no permite declarar dos variables con el mismo nombre exacto.
            </a>
          </li>
          <li>
            <a href="#const-must-initialize">
              const no permite declarar una variable sin inicializar.
            </a>
          </li>
          <li>
            <a href="#var-duplicate-names">
              var permite declarar dos variables con el mismo nombre.
            </a>
          </li>
          <li>
            <a href="#var-can-be-uninitialized">
              var permite declarar sin inicializar la variable.
            </a>
          </li>
          <li>
            <a href="#let-can-be-uninitialized">
              let permite declarar una variable sin inicializar.
            </a>
          </li>
          <li>
            <a href="#const-no-duplicate-names">
              const no permite declarar dos variables con el mismo nombre.
            </a>
          </li>
        </ul>
      </section>

      <section id="reglas-para-nombrar-variables-en-javascript">
        <h2>BUENAS PRACTICAS PARA NOMBRAR LAS VARIABLES</h2>
        <section id="starts-with-a-letter">
        <h4>
          <p>
            1. Las variables deben comenzar con una letra (a-z, A-Z), un signo
            de dólar ($) o un guion bajo (_)
          </p>
        </h4>
          <pre>
            <code class="language-javascript">
              // Empezando correctamente con una letra
              let edadUsuario = 30; // nombre correcto
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              // Empezando correctamente con un signo de dólar
              let $edadUsuario = 30; // nombre correcto
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              // Empezando correctamente con un guion bajo
              let _edadUsuario = 30; // nombre correcto
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              // INCORRECTO: No se debe usar un guion medio
              let edad-usuario = 30; // nombre incorrecto
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              // CORRECTO: usando el guion bajo
              let edad_usuario = 30; // nombre incorrecto
            </code>
          </pre>

          <pre>
            <code class="language-javascript">
              // INCORRECTO: No se debe usar un espacio en el nombre de la variable
              let edad usuario = 30; // nombre incorrecto
            </code>
          </pre>
        </section>

        <section id="cannot-start-with-a-number">
        <h4>
          <p>2. No pueden comenzar con un número (0-9)</p>
        </h4>
          <pre>
            <code class="language-javascript">
              // INCORRECTO: No se puede empezar con un número el nombre de una variable
              let 30edadUsuario = 30; // nombre incorrecto
            </code>
          </pre>
        </section>
        <section id="cannot-contain-spaces">
        <h4>
          <p>
            3. Pueden contener letras, números, signos de dólar y guiones bajos.
          </p>
        </h4>
          <pre>
            <code class="language-javascript">
              let variable = 10; // Buen uso;
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let $variable = 10; // Buen uso;
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let _variable = 10; // Buen uso;
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable_ = 10; // Buen uso;
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable$ = 10; // Buen uso;
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable123 = 10; // Buen uso;
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable_123 = 10; // Buen uso;
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable$123 = 10; // Buen uso;
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable_123$ = 10; // Buen uso;
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable123$ = 10; // Buen uso;
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable123_ = 10; // Buen uso;
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable_123_ = 10; // Buen uso;
            </code>
          </pre>
        </section>
        <section id="cannot-contain-special-characters">
        <h4>
          <p>
            4. No pueden contener espacios ni caracteres especiales como @, #, %, etc.
          </p>
          </h4>
          <pre>
            <code class="language-javascript">
              let nie extranjero = 10; // Mal uso; estamos usando un espacio entre nie y extranjero
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable- = 10; // Mal uso; estamos usando un guion medio en la variable
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable@ = 10; // Mal uso; estamos usando un signo de arroba en la variable
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable# = 10; // Mal uso; estamos usando un signo de numeral en la variable
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let variable% = 10; // Mal uso; estamos usando un signo de porcentaje en la variable
            </code>
          </pre>
        </section>

        <section id="cannot-be-keywords">
        <h4>
          <p>
            5. Evitar palabras reservadas: no usar palabras que tienen un
            significado especial en JavaScript
          </p>
        </h4>
          <pre>
            <code class="language-javascript">
              // let var = 10; // Mal uso, 'var' es una palabra reservada
              let variable = 10; // Buen uso
            </code>
          </pre>
        </section>

        <section id="case-sensitive">
        <h4>
          <p>
            6. Las variables que se declaran son sensibles a mayúsculas y minúsculas.
          </p>
        </h4>
          <pre>
            <code class="language-javascript">
              let direccionUsuario = "Calle Falsa 123"; // Buen nombre
            </code>
          </pre>

          <pre>
            <code class="language-javascript">
              let DireccionUsuario = "Calle Falsa 123"; // No es consistente con camelCase
              // y es distinta a la variable direccionUsuario
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let DIRECCIONusuario = "Calle Falsa 123"; // No es consistente con camelCase 
              // y es distinta a la variable direccionUsuario
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              let direccionUSUARIO = "Calle Falsa 123"; // No es consistente con camelCase 
              // y es distinta a la variable direccionUsuario
            </code>
          </pre>
        </section>
      </section>
      <h2>RESTRICCIONES EN EL USO DE VARIABLES</h2>
      <section id="restricciones-al-uso-de-las-variables">
        <section id="let-no-duplicate-names">
          <h4>
            <p>1. let no permite declarar variables con el mismo nombre</p>
          </h4>
          <pre>
            <code class="language-javascript">
              // INCORRECTO: nombre de variable repetido
              let edadUsuario = 30; // esta asignacion es correcta
              let edadUsuario = 40; // incorrecto: repites el nombre de la variable
            </code>
          </pre>
        </section>

        <section id="const-must-initialize">
          <h4>
            <p>
              2. La palabra reservada const no permite declarar variables sin inicializar
            </p>
          </h4>
          <pre>
            <code class="language-javascript">
              // CORRECTO: declaracion e inicializacion al mismo tiempo;
              const edadUsuario = 30;
            </code>
          </pre>
        </section>

        <section id="var-duplicate-names">
          <h4>
            <p>
              3. La palabra reservada var permite declarar variables con el mismo nombre
            </p>
          </h4>
          <pre>
            <code class="language-javascript">
              // CORRECTO: nombre de variable repetido;
              var edadUsuario = 30;
              var edadUsuario = 40; // esta asignacion es correcta, no genera
              // fallos de sintaxis sin embargo puede generar problemas en
              // aplicaciones grandes en tiempos de ejecucion.
            </code>
          </pre>
        </section>

        <section id="var-can-be-uninitialized">
          <h4>
            <p>
              4. La palabra reservada var permite declarar variables sin
              inicializar
            </p>
          </h4>
          <pre>
            <code class="language-javascript">
              // CORRECTO: variable declarada sin inicializar
              var edadUsuario;
              // Posteriormente se le asigna un valor
              edadUsuario = 40; // esta asignacion es correcta
            </code>
          </pre>
        </section>

        <section id="let-can-be-uninitialized">
          <h4>
            <p>
              5. La palabra reservada let permite declarar variables sin
              inicializar
            </p>
          </h4>
          <pre>
            <code class="language-javascript">
              // CORRECTO: variable declarada con let sin inicializar
              let edadUsuario;
              // Posteriormente se le asigna un valor
              edadUsuario = 40; // esta asignacion es correcta
            </code>
          </pre>
        </section>

        <section id="const-no-duplicate-names">
          <h4>
            <p>
              6. La palabra reservada const no permite declarar dos variables
              con el mismo nombre
            </p>
          </h4>
          <pre>
            <code class="language-javascript">
              // INCORRECTO: nombre de variable repetido;
              const edadUsuario = 30;
              const edadUsuario = 40; // esta asignacion es incorrecta, genera un error en consola
            </code>
          </pre>
        </section>
      </section>
    `;

export default htmlVariables3;
