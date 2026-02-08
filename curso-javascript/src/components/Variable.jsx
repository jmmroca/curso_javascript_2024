import React from "react";

function Variable() {
  return (
    <>
      <h2>Ámbitos de Variables en JavaScript</h2>

      <p>
        En JavaScript, el ámbito determina desde dónde puede accederse a una
        variable. Existen principalmente tres tipos de ámbito:{" "}
        <strong>global</strong>, <strong>de función</strong> y{" "}
        <strong>de bloque</strong>.
      </p>

      <h3>1. Ámbito Global</h3>
      <p>
        Una variable definida fuera de cualquier función o bloque pertenece al
        ámbito global. Es accesible desde cualquier parte del código.
      </p>
      <pre>
        <code className="language-javascript">
{`var x = 10;
console.log(x); // 10`}
        </code>
      </pre>

      <h3>2. Ámbito de Función</h3>
      <p>
        Las variables declaradas con <code>var</code> dentro de una función solo
        existen dentro de esa función.
      </p>
      <pre>
        <code className="language-javascript">
{`function ejemplo() {
  var y = 20;
  console.log(y); // 20
}
ejemplo();
console.log(y); // Error: y no está definida`}
        </code>
      </pre>

      <h3>3. Ámbito de Bloque</h3>
      <p>
        Las variables declaradas con <code>let</code> y <code>const</code> solo
        existen dentro del bloque donde se definen (entre llaves).
      </p>
      <pre>
        <code className="language-javascript">
{`{
  let a = 5;
  const b = 10;
  console.log(a, b); // 5 10
}
console.log(a); // Error: a no está definida`}
        </code>
      </pre>

      <h3>4. Hoisting y diferencias entre var, let y const</h3>
      <p>
        <strong>var</strong> se eleva (hoisting) y puede usarse antes de ser
        declarada, aunque su valor será <code>undefined</code> hasta la
        asignación.
      </p>
      <p>
        <strong>let</strong> y <strong>const</strong> también se elevan, pero
        quedan en la &quot;zona muerta temporal&quot; y no pueden usarse antes
        de su declaración.
      </p>

      <pre>
        <code className="language-javascript">
{`console.log(x); // undefined
var x = 10;

console.log(y); // Error
let y = 20;`}
        </code>
      </pre>
    </>
  );
}

export default Variable;
