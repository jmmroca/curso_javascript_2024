import BloqueCodigo from "./components/BloqueCodigo";
import TitleContainer from "./components/TitleContainer";
import variable from "./assets/variable.jpg";

function Variables003({ copySnippet }) {
  return (
    <>
      <section>
      <TitleContainer titulo={"Variables"} imagen={variable} subtitulo={"Variables III en JavaScript"} imagenGrande={false}/>
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
          <BloqueCodigo
            copySnippet={copySnippet}
            titulo="1. Las variables deben comenzar con una letra (a-z, A-Z), un signo
              de dólar ($) o un guion bajo (_)"
            codigo={`
let edadUsuario = 30; // Empezando correctamente con una letra
let $edadUsuario = 30; // Empezando correctamente con un signo de dólar
let _edadUsuario = 30; // Empezando correctamente con un guion bajo
let edad-usuario = 30; // INCORRECTO: No se debe usar un guion medio
let edad_usuario = 30; // CORRECTO: usando el guion bajo
let edad usuario = 30; // INCORRECTO: No se debe usar un espacio en el nombre de la variable
            `}
          />
        </section>

        <section id="cannot-start-with-a-number">
          <BloqueCodigo
            copySnippet={copySnippet}
            titulo="2. No pueden comenzar con un número (0-9)"
            codigo=" let 30edadUsuario = 30; // INCORRECTO: No se puede empezar con un número el nombre de una variable"
          />
        </section>
        <section id="cannot-contain-spaces">
          <BloqueCodigo
            copySnippet={copySnippet}
            titulo="3. Pueden contener letras, números, signos de dólar y guiones bajos."
            codigo={`
let variable = 10; // Buen uso
let $variable = 10; // Buen uso
let _variable = 10; // Buen uso
let variable_ = 10; // Buen uso
let variable- = 10; // INCORRECTO: No se debe usar un guion medio
let variable_ = 10; // Buen uso
let variable$ = 10; // Buen uso
let variable123 = 10; // Buen uso
let variable_123 = 10; // Buen uso
let variable$123 = 10; // Buen uso
let variable_123$ = 10; // Buen uso
let variable123$ = 10; // Buen uso
let variable123_ = 10; // Buen uso
let variable_123_ = 10; // Buen uso
`}
          />
        </section>
        <section id="cannot-contain-special-characters">
          <BloqueCodigo
            copySnippet={copySnippet}
            titulo="4. No pueden contener espacios ni caracteres especiales como @, #, %, etc."
            codigo="
  let nie extranjero = 10; // Mal uso; estamos usando un espacio entre nie y extranjero
  let variable- = 10; // Mal uso; estamos usando un guion medio en la variable
  let variable@ = 10; // Mal uso; estamos usando un signo de arroba en la variable
  let variable# = 10; // Mal uso; estamos usando un signo de numeral en la variable  
  let variable% = 10; // Mal uso; estamos usando un signo de porcentaje en la variable
  let variable& = 10; // Mal uso; estamos usando un signo de ampersand en la variable
  let variable* = 10; // Mal uso; estamos usando un signo de asterisco en la variable
  let variable+ = 10; // Mal uso; estamos usando un signo de suma en la variable
  let variable= = 10; // Mal uso; estamos usando un signo de igual en la variable
  let variable/ = 10; // Mal uso; estamos usando un signo de barra en la variable
  let variable: = 10; // Mal uso; estamos usando un signo de dos puntos en la variable
  let variable; = 10; // Mal uso; estamos usando un signo de punto y coma en la variable
  let variable< = 10; // Mal uso; estamos usando un signo de menor en la variable
  let variable> = 10; // Mal uso; estamos usando un signo de mayor en la variable"
          />
        </section>

        <section id="cannot-be-keywords">
          <BloqueCodigo
            copySnippet={copySnippet}
            titulo="5. Evitar palabras reservadas: no usar palabras que tienen un significado especial en JavaScript"
            codigo={`
let var = 10; // Mal uso, 'var' es una palabra reservada
let variable = 10; // Buen uso  
`}
          />
        </section>

        <section id="case-sensitive">
          <BloqueCodigo
            copySnippet={copySnippet}
            titulo="6. Las variables que se declaran son sensibles a mayúsculas y minúsculas."
            codigo={`
let direccionUsuario = "Calle Falsa 123"; // Buen nombre
let DireccionUsuario = "Calle Falsa 123"; // Mal nombre: No es consistente con camelCase
let direccionUSUARIO = "Calle Falsa 123"; // Mal nombre: No es consistente con camelCase
let DIRECCIONusuario = "Calle Falsa 123"; // Mal nombre: No es consistente con camelCase
`}
          />
        </section>

        <h2>RESTRICCIONES EN EL USO DE VARIABLES</h2>
        <section id="restricciones-al-uso-de-las-variables">
          <section id="let-no-duplicate-names">
            <BloqueCodigo
              copySnippet={copySnippet}
              titulo="1. let no permite declarar variables con el mismo nombre"
              codigo={`
let edadUsuario = 30; // CORRECTO: esta asignacion es correcta
let edadUsuario = 40; // INCORRECTO: repites el nombre de la variable
`}
            />
          </section>

          <section id="const-must-initialize">
            <BloqueCodigo
              copySnippet={copySnippet}
              titulo="2. La palabra reservada const no permite declarar variables sin inicializar"
              codigo={`
const edadUsuario = 30; // CORRECTO: declaracion e inicializacion al mismo tiempo;
`}
            />
          </section>

          <section id="var-duplicate-names">
            <BloqueCodigo
              copySnippet={copySnippet}
              titulo="3. La palabra reservada var permite declarar variables con el mismo nombre"
              codigo={` 
var edadUsuario = 30; // CORRECTO: nombre de variable repetido; 
var edadUsuario = 40; // esta asignacion es correcta, no genera fallos de sintaxis sin embargo puede generar problemas en aplicaciones grandes en tiempos de ejecucion.
`}
            />
          </section>

          <section id="var-can-be-uninitialized">
            <BloqueCodigo
              copySnippet={copySnippet}
              titulo="4. La palabra reservada var permite declarar variables sin inicializar"
              codigo={`
var edadUsuario; // CORRECTO: variable declarada sin inicializar     
//Posteriormente se le asigna un valor
edadUsuario = 40; // esta asignacion es correcta
`}
            />
          </section>
        </section>

        <section id="let-can-be-uninitialized">
          <BloqueCodigo
            copySnippet={copySnippet}
            titulo="5. La palabra reservada let permite declarar variables sin inicializar"
            codigo={`
let edadUsuario; // CORRECTO: variable declarada sin inicializar     
//Posteriormente se le asigna un valor
edadUsuario = 40; // esta asignacion es correcta
`}
          />
        </section>

        <section id="const-no-duplicate-names">
          <BloqueCodigo
            copySnippet={copySnippet}
            titulo="6. La palabra reservada const no permite declarar dos variables con el mismo nombre"
            codigo={` 
const edadUsuario = 30; // CORRECTO: esta asignacion es correcta
const edadUsuario = 40; // INCORRECTO: repites el nombre de la variable
`}
          />
        </section>
      </section>
    </>
  );
}

export default Variables003;
