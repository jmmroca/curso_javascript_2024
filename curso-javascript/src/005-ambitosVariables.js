const htmlVariables5 = `
<section>
    <div id="title-container">
        <div id="image"><img
        class="imagen-grande"
        src="/public/Scope-en-JavaScript.jpg" alt=""></div>
        <div id="text">
            Ámbitos en JavaScript
        </div>
        <div id="logo-javascript">JS</div>
    </div>
    <p>
        En esta sección, aprenderemos sobre las variables en JavaScript, como saber donde usarlas por su ámbito o scope.
    </p>
</section>

      <section id="ambitos-de-variables-en-javascript">
      <h2>Ámbitos de Variables en JavaScript</h2>

      <p>
        En JavaScript, el ámbito determina desde dónde puede accederse a una
        variable. Existen principalmente tres tipos de ámbito:
        <strong>global</strong>, <strong>de función</strong> y
        <strong>de bloque</strong>.
      </p>
      </section>
      <section id="ambito-global">

      <h3>1. Ámbito Global</h3>
      <p>
        Una variable definida fuera de cualquier función o bloque pertenece al
        ámbito global. Es accesible desde cualquier parte del código.
      </p>
      <pre>
        <code class='language-javascript'>
            var x = 10;
            console.log(x); // 10
        </code>
      </pre>
      </section>
      <section id="ambito-de-funcion">
      <h3>2. Ámbito de Función</h3>
      <p>
        Las variables declaradas con <code class="language-javascript">var</code> dentro de una función solo
        existen dentro de esa función.
      </p>
      <pre>
        <code class="language-javascript">
            function ejemplo() {
              var y = 20;
              console.log(y); // 20
            }

          ejemplo();

          console.log(y); // Error: y no está definida
        </code>
      </pre>
      </section>
      <section id="ambito-de-bloque">
      <h3>3. Ámbito de Bloque</h3>
      <p>
        Las variables declaradas con <code class="language-javascript">let</code> y <code class="language-javascript">const</code> solo
        existen dentro del bloque donde se definen (entre llaves).
      </p>
      <pre>
        <code class="language-javascript">
{
  let a = 5;
  const b = 10;
  console.log(a, b); // 5 10
}
console.log(a); // Error: a no está definida
        </code>
      </pre>

      <h3>4. Hoisting y diferencias entre var, let y const</h3>
      <p>
        <strong>var</strong> se eleva (hoisting) y puede usarse antes de ser
        declarada, aunque su valor será <code class="language-javascript">undefined</code> hasta la
        asignación.
      </p>
      <p>
        <strong>let</strong> y <strong>const</strong> también se elevan, pero
        quedan en la &quot;zona muerta temporal&quot; y no pueden usarse antes
        de su declaración.
      </p>

      <pre>
        <code class="language-javascript">
          console.log(x); // undefined
          var x = 10;

          console.log(y); // Error
          let y = 20;
        </code>
      </pre>
    </section>
    `;

export default htmlVariables5;
