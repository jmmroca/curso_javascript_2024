
// Una variable es un espacio en memoria que almacena un valor

// Declaración de una variable: se puede hacer con las palabras clave var, let o const
// Inicialización de una variable: asignar un valor a la variable   

// Declaración de una variable global
// var nombre; 
var nombreConVar = "Juan Perez"; // Declaración e inicialización de una variable
// para poder ver el valor de la variable en la consola
console.log(nombreConVar);

// Declaración e inicialización de una variable con let, que es una variable de bloque 
let nombreConLet = "Juan Perez"; // Declaración e inicialización de una variable
console.log(nombreConLet);
// Declaración e inicialización de una variable con const, que es una constante de bloque
const nombreConConst = "Juan Perez"; // Declaración e inicialización de una variable
console.log(nombreConConst);
// si intentamos cambiar el valor de una constante, obtendremos un error
// nombreConConst = "Pedro Gomez"; // Esto generará un error si decomentamos esta línea

// Buenas prácticas para nombrar variables:
// 1. Usar nombres descriptivos: el nombre de la variable debe indicar claramente su propósito
let edadUsuario = 30; // Buen nombre
// let e = 30; // Mal nombre   
console.log(edadUsuario);
// 2. Usar camelCase para múltiples palabras: la primera palabra en minúscula y las siguientes con la primera letra en mayúscula
let nombreCompletoUsuario = "Juan Perez"; // Buen uso de camelCase
console.log(nombreCompletoUsuario);
// let Nombre_completo_usuario = "Juan Perez"; // Mal uso de camelCase
// 3. Evitar palabras reservadas: no usar palabras que tienen un significado especial en JavaScript
// let var = 10; // Mal uso, 'var' es una palabra reservada
let variable = 10; // Buen uso
console.log(variable);
// 4. Ser consistente: usar un estilo consistente para nombrar variables en todo el código
let numeroDeTelefono = "123-456-7890"; // Consistente con camelCase
console.log(numeroDeTelefono);
// let numero_de_telefono = "123-456-7890"; // Inconsistente con camelCase
// 5. Evitar abreviaturas innecesarias: usar nombres completos para mayor claridad
let direccionUsuario = "Calle Falsa 123"; // Buen nombre
console.log(direccionUsuario);
// let dirUsr = "Calle Falsa 123"; // Mal nombre
// 6. Usar prefijos o sufijos cuando sea apropiado: para indicar el tipo de dato o el propósito
let isUsuarioActivo = true; // Buen uso del prefijo 'is' para indicar un booleano
console.log(isUsuarioActivo);
