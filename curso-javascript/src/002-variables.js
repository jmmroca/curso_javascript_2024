 const htmlVariables2 = (`<section>
    <div id="title-container">
        <div id="image"><img src="/public/variable.jpg" alt=""></div>
        <div id="text">
            Variables II en JavaScript
        </div>
        <div id="logo-javascript">JS</div>
    </div>
    <p>
        En esta sección, aprenderemos sobre las variables en JavaScript, como seguir las buenas
        prácticas para nombrarlas.
    </p>
</section>
<section>
</pre>
    <p>
        Buenas prácticas para nombrar variables:
    </p>
    <p>
        1. Usar nombres descriptivos: el nombre de la variable debe indicar claramente su propósito
    </p>
    <pre>
    <code class="language-javascript">
        let edadUsuario = 30; // Buen nombre
        // let e = 30; // Mal nombre
        console.log(edadUsuario);
    </code>
</pre>
    <p>
        2. Usar camelCase para múltiples palabras: la primera palabra en minúscula y las siguientes con la primera letra
        en
        mayúscula
    </p>
    <pre>
    <code class="language-javascript">
        let nombreCompletoUsuario = "Juan Perez"; // Buen uso de camelCase
        console.log(nombreCompletoUsuario);
        // let Nombre_completo_usuario = "Juan Perez"; // Mal uso de camelCase
    </code>
</pre>
    <p>
        3. Evitar palabras reservadas: no usar palabras que tienen un significado especial en JavaScript
    </p>
    <pre>
    <code class="language-javascript">
        // let var = 10; // Mal uso, 'var' es una palabra reservada
        let variable = 10; // Buen uso
        console.log(variable);
    </code>
</pre>
    <p>
        4. Ser consistente: usar un estilo consistente para nombrar variables en todo el código
    </p>
    <pre>
    <code class="language-javascript">
        let numeroDeTelefono = "123-456-7890"; // Consistente con camelCase
        console.log(numeroDeTelefono);
        // let numero_de_telefono = "123-456-7890"; // Inconsistente con camelCase
    </code>
</pre>
    <p>
        5. Evitar abreviaturas innecesarias: usar nombres completos para mayor claridad
    </p>
    <pre>
    <code class="language-javascript">
        let direccionUsuario = "Calle Falsa 123"; // Buen nombre
        console.log(direccionUsuario);
        // let dirUsr = "Calle Falsa 123"; // Mal nombre
    </code>
</pre>
    <p>
        6. Usar prefijos o sufijos cuando sea apropiado: para indicar el tipo de dato o el propósito
    </p>
    <pre>
    <code class="language-javascript">
        let isUsuarioActivo = true; // Buen uso del prefijo 'is' para indicar un booleano
        console.log(isUsuarioActivo);
        // let usuarioActivo = true; // Menos claro sin el prefijo 'is'
    </code>
</pre>
    <p>
        7. Evitar el uso excesivo de mayúsculas y minúsculas: para evitar confusiones
    </p>
    <pre>
    <code class="language-javascript">
        let precioProducto = 100; // Buen uso
        console.log(precioProducto);
        // let PrecioProducto = 100; // Mal uso, puede causar confusión al leer el código
    </code>
</pre>
    <p>
        Resumen: seguir estas buenas prácticas ayuda a mantener el código limpio, legible y fácil de mantener.
    </p>
</section>`);

export default htmlVariables2;