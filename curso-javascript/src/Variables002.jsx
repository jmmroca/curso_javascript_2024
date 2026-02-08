import BloqueCodigo from "./components/BloqueCodigo";

function Variables002({ copySnippet }) {
  return (
    <>
      <section>
        <div id="title-container">
          <div id="image">
            <img src="/public/variable.jpg" alt="" />
          </div>
          <div id="text">Variables II en JavaScript</div>
          <div id="logo-javascript">JS</div>
        </div>
        <p>
          En esta sección, aprenderemos sobre las variables en JavaScript, como
          seguir las buenas prácticas para nombrarlas.
        </p>
      </section>
      <section>
        <p>Buenas prácticas para nombrar variables:</p>
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="1. Usar nombres descriptivos: el nombre de la variable debe indicar claramente su propósito"
          codigo={`
            let edadUsuario = 30;   // Buen nombre
            let e = 30;             // Mal nombre 
          `}
        />
        <BloqueCodigo 
          copySnippet={copySnippet}
          titulo="2. Usar camelCase para múltiples palabras: la primera palabra en minúscula y las siguientes con la primera letra en mayúscula"
          codigo={`
            let nombreCompletoUsuario = "Juan Perez";   // Buen uso de camelCase
            let Nombre_completo_usuario = "Juan Perez"; // Mal uso de camelCase
          `}
        />
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="3. Evitar palabras reservadas: no usar palabras que tienen un significado especial en JavaScript"
          codigo={`
            let var = 10;      // Mal uso, 'var' es una palabra reservada
            let variable = 10; // Buen uso
          `}
        />
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="4. Ser consistente: usar un estilo consistente para nombrar variables en todo el código"
          codigo={`
            let numeroDeTelefono = "123-456-7890";   // Consistente con camelCase
            let numero_de_telefono = "123-456-7890"; // Inconsistente con camelCase
          `}
        />
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="5. Evitar abreviaturas innecesarias: usar nombres completos para mayor claridad"
          codigo={`
            let direccionUsuario = "Calle Falsa 123"; // Buen nombre
            let dirUsr = "Calle Falsa 123";           // Mal nombre
          `}
        />
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="6. Usar prefijos o sufijos cuando sea apropiado: para indicar el tipo de dato o el propósito"
          codigo={`
            let isUsuarioActivo = true; // Buen uso del prefijo 'is' para indicar un booleano
            let usuarioActivo = true;   // Menos claro sin el prefijo 'is'
          `}
        />
        <BloqueCodigo
          copySnippet={copySnippet}
          titulo="7. Evitar el uso excesivo de mayúsculas y minúsculas: para evitar confusiones"
          codigo={`
            let precioProducto = 100;  // Buen uso
            let precio_producto = 100; // Mal uso
          `}
        />
        <p>
          Resumen: seguir estas buenas prácticas ayuda a mantener el código
          limpio, legible y fácil de mantener.
        </p>
      </section>
    </>
  );
}

export default Variables002;
