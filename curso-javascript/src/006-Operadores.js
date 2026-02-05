const htmlVariables6= `
<section>
    <div id="title-container">
        <div id="image"><img
        class="imagen-grande"
        src="/public/Scope-en-JavaScript.jpg" alt=""></div>
        <div id="text">
            Operadores en JavaScript
        </div>
        <div id="logo-javascript">JS</div>
    </div>
    <p>
        En esta sección, aprenderemos sobre los operadores en JavaScript.
    </p>
</section>
      <section>
      <h2>Operadores en JavaScript</h2>

      <p>
        Los operadores en JavaScript son simbolos que se usan para realizar operaciones matemáticas o logicas.
      </p>
      </section>
      <section id="operadores-en-javascript">
      <h3>1. Operadores aritméticos</h3>
      <p>
        Los operadores aritméticos son usados para realizar operaciones matemáticas.
      </p>
      <pre>
        <code class='language-javascript'>
            let x = 10;
            let y = 5;
            let z = x + y; // 15
            let a = x - y; // 5
            let b = x * y; // 50
            let c = x / y; // 2
        </code>
      </pre>
      </section>
      <section id="operadores-en-javascript">
      <h3>2. Operadores de asignación</h3>
      <p>
        Los operadores de asignación son usados para asignar valores a variables.
      </p>
      <pre>
        <code class='language-javascript'>
            let x = 10;
            let y = 5;
            let z = x + y; // 15
            let a = x - y; // 5
            let b = x * y; // 50
            let c = x / y; // 2
        </code>
      </pre>
      </section>
    </section>
    <section>
  <h2>Resumen de Operadores en JavaScript</h2>

  <h3>1. Operadores Aritméticos</h3>
  <ul>
    <li><code class="language-javascript">+</code> : Suma o concatenación.</li>
    <li><code class="language-javascript">-</code> : Resta.</li>
    <li><code class="language-javascript">*</code> : Multiplicación.</li>
    <li><code class="language-javascript">/</code> : División.</li>
    <li><code class="language-javascript">%</code> : Módulo (resto de la división).</li>
    <li><code class="language-javascript">**</code> : Exponenciación.</li>
    <li><code class="language-javascript">++</code> : Incremento.</li>
    <li><code class="language-javascript">--</code> : Decremento.</li>
  </ul>

  <h3>2. Operadores de Asignación</h3>
  <ul>
    <li><code class="language-javascript">=</code> : Asignación básica.</li>
    <li><code class="language-javascript">+=</code>, <code class="language-javascript">-=</code>, <code class="language-javascript">*=</code>, <code class="language-javascript">/=</code>, <code class="language-javascript">%=</code>, <code class="language-javascript">**=</code> : Asignación compuesta.</li>
  </ul>

  <h3>3. Operadores de Comparación</h3>
  <ul>
    <li><code class="language-javascript">==</code> : Igualdad (compara valores).</li>
    <li><code class="language-javascript">===</code> : Igualdad estricta (compara valor y tipo).</li>
    <li><code class="language-javascript">!=</code> : Desigualdad.</li>
    <li><code class="language-javascript">!==</code> : Desigualdad estricta.</li>
    <li><code class="language-javascript">&gt;</code>, <code class="language-javascript">&lt;</code>, <code class="language-javascript">&gt;=</code>, <code class="language-javascript">&lt;=</code> : Comparaciones numéricas.</li>
  </ul>

  <h3>4. Operadores Lógicos</h3>
  <ul>
    <li><code class="language-javascript">&&</code> : AND lógico.</li>
    <li><code class="language-javascript">||</code> : OR lógico.</li>
    <li><code class="language-javascript">!</code> : NOT lógico (negación).</li>
  </ul>

  <h3>5. Operadores de Tipo</h3>
  <ul>
    <li><code class="language-javascript">typeof</code> : Devuelve el tipo del operando.</li>
    <li><code class="language-javascript">instanceof</code> : Comprueba si un objeto es instancia de una clase.</li>
  </ul>

  <h3>6. Operadores de Cadena</h3>
  <ul>
    <li><code class="language-javascript">+</code> : Concatena cadenas.</li>
    <li><code class="language-javascript">+=</code> : Añade una cadena al final de otra.</li>
  </ul>

  <h3>7. Operador Ternario</h3>
  <p><code class="language-javascript">condición ? expresiónSiTrue : expresiónSiFalse</code></p>
  <p>Ejemplo: <code class="language-javascript">let mensaje = edad >= 18 ? "Adulto" : "Menor";</code></p>

  <h3>8. Operadores de Desestructuración y Spread</h3>
  <ul>
    <li><code class="language-javascript">...</code> : Operador spread (expande elementos de un array u objeto).</li>
    <li><code class="language-javascript">{ a, b }</code>, <code class="language-javascript">[x, y]</code> : Desestructuración de objetos y arrays.</li>
  </ul>
</section>

    `;

export default htmlVariables6;
