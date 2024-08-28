// 2.13 a 2.18
// <--while-->
// // // caps de el 2.13 a el 2.18
// let i = 0;
// while (i < 50) { // se repite asta el numero 50 donde while deja de añadir numeros osea que i cuando es igual a 50 el bucle se elimina
//   alert( i );
//   i++;
// }
// {/* <la i es la bariable la cual se le añade para aser el bucle osea sde le suma donde la bariable i es igual a 0 y la bariable while ase que segun condiciones especificas se den  */}
// <--do whilke-->
// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);
// < bucle lo que busca es no causar lag en las paginas web donde se use comprovando su valor real ejecutandose primero en el cuerpo y volviense a ejecutar>
// // <---for-->
// for (let i = 0; i < 34; i++) { // muestra 0, luego 1, luego 2
//     alert(i);
//   }
//   en este caso el for ta,bien es un bucle sino que este es mas complejo que while y do while donde se le pide a este un inicio una condi y un paso a la i se le empieza con un balor de 0 la condi es que sea menor a 34 y el paso fina es que se le sume >
// let a = 2 + 1;

// switch (a) {
//   case 3:
//     alert( 'Muy pequeño' );
//     break;
//   case 4:
//     alert( '¡Exacto!' );
//     break;
//   case 5:
//     alert( 'Muy grande' );
//     break;
//   default:
//     alert( "Desconozco estos valores" );
// }
// // switch se usa para ejecutar barias cosas a la vez donde segun lo que dicte el let eje el resultaco de la suma de 2 mas 2 nos dara una alerta la cual nos dice exacto
// // // // funciones
// // // function showMessage() {
// // //     alert( 'nada de las nadas menorsin salchichonsin' );
// // //   }
  
// // //   showMessage();
// // //   showMessage();
// // //   usamos funcion para describir un mensaje o cualquier cosa que quisieramos poner eje el alert le colocamos el nombre a la funcion y colocamos lo que queremos que aga
// funciones poderosas 2.0
// let sayHi = function() {
// //     alert( "Hola" );
// //   };
// // const esPar = num => num % 2 === 0;
// toca decir que los capitulos de 3.0 en adelante  son basicamente cuestiones de escritura , herramientas como el dumbligg en chrome o en brave como ej de otro navegador el como escribir la sintaxis y el que el codigo sea los mas corto e ingenioso posible optimizado y no muy llenos de cosas por ejemplo en la sinraxis la mayoria de cosas tienen que ir entre llaves ej let 34+55 {alert('hshshshshshshsh')} otra cosa tambien puede ser el que se pude dejar una liena pero con llaves sin llaves es como un crimen pa los bagos de java y otras cosas como el tener barios repertorios para comparar resulrados de un experimento entre funciones
// let total = 0;
// for (let i = 0; i < 10; i++) {
//     total += i;
// }
// console.log(total);
// // los comen son como esto : el nr brayan pv y las locuras en el bosque de las fantasias es una saga de peliculeras citados en el siguiente bloque de codigo segun el valor de el numero que tenga 
// const rango = [...Array(10).keys()].map(x => x + 1).filter(x => x % 2 === 0);
// console.log(rango); // [2, 4, 6, 8, 10]
// const assert = require('assert');

// describe('calcularAreaRectangulo', function() {
//     it('debería devolver 20 para base 4 y altura 5', function() {
//         assert.strictEqual(calcularAreaRectangulo(4, 5), 20);
//     });

//     it('debería devolver un mensaje de error si la base es 0', function() {
//         assert.strictEqual(calcularAreaRectangulo(0, 5), "La base y la altura deben ser mayores que cero.");
//     });
// });


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////>

// los objetos y lo basico de 4.0  en adelante es que los objetos pueden almasenar cosas como lo puede ser Videos mp4 , archibos pdf u otras cosas como contraseñas y usuarios con sus cosas subidas de cada uno con lo que se puede crear cosas como registros e info personal de cada persona que se registre como un server donde se almasene las cosas.
{/* <object data="archivo.pdf" type="application/pdf" width="600" height="400">
    Su navegador no soporta la visualización de objetos incrustados.
</object>
<object data="video.mp4" type="video/mp4" width="600" height="400">
    Su navegador no soporta el video incrustado. Aquí hay un enlace para <a href="video.mp4">descargar el video</a>.
</object>
let user = {
    // ...
  };
  
  // primero, declara
  function sayHi() {
    alert("¡Hola!");
  };
  
  // entonces la agrega como un método
  user.sayHi = sayHi;
  
  user.sayHi(); // ¡Hola!
  // salida
alert(obj);

// utilizando un objeto como clave
anotherObj[obj] = 123;
// `user` tiene una referencia al objeto
let user = {
    name: "John"
  }
   */}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////>

// 5.1 Métodos en Tipos Primitivos


// let numero = 123.456;
// let entero = numero.toFixed(2); // "123.46"
// let exponencial = numero.toExponential(2); // "1.23e+2"
// ```
// 5.2Números

// let num = 5.56789;
// console.log(num.toFixed(2)); // "5.57"
// console.log(Math.round(num)); // 6
// console.log(Math.random()); // número aleatorio entre 0 y 1
// ```

// 5.3Strings


// let saludo = "Hola, Mundo!";
// console.log(saludo.toLowerCase()); // "hola, mundo!"
// console.log(saludo.indexOf("Mundo")); // 6
// console.log(saludo.replace("Mundo", "JavaScript")); // "Hola, JavaScript!"
// ```

// 5.4 Arrays

// let frutas = ["Manzana", "Banana", "Naranja"];
// console.log(frutas.length); // 3
// frutas.push("Mango"); // Añadir al final
// console.log(frutas); // ["Manzana", "Banana", "Naranja", "Mango"]
// ```

// 5.5 Métodos de Arrays

// let numeros = [1, 2, 3, 4];
// let dobles = numeros.map(n => n * 2); // [2, 4, 6, 8]
// let pares = numeros.filter(n => n % 2 === 0); // [2, 4]
// let suma = numeros.reduce((acc, n) => acc + n, 0); // 10
// ```

// 5.6 Iterables

// let iterable = [10, 20, 30];
// for (let valor of iterable) {
//     console.log(valor); // 10, luego 20, luego 30
// }
// ```

// 5.7 Map y Set


// let conjunto = new Set();
// conjunto.add(1);
// conjunto.add(2);
// conjunto.add(2); // No se añade porque ya existe
// console.log(conjunto); // Set { 1, 2 }
// ```

// 5.8 WeakMap y WeakSet


// let obj1 = { nombre: "Juan" };
// let weakSet = new WeakSet();
// weakSet.add(obj1);
// obj1 = null; // El objeto puede ser recolectado
// ```

// 5.9 Object.keys, values, entries

// let persona = { nombre: "Ana", edad: 25 };
// console.log(Object.keys(persona)); // ["nombre", "edad"]
// console.log(Object.values(persona)); // ["Ana", 25]
// console.log(Object.entries(persona)); // [["nombre", "Ana"], ["edad", 25]]
// ```

// 5.10 Asignación Desestructurante

// let { nombre, edad } = { nombre: "Carlos", edad: 28 };
// console.log(nombre); // "Carlos"
// console.log(edad); // 28
// ```

// 5.11 Fecha y Hora


// let ahora = new Date();
// console.log(ahora.toISOString()); // Fecha y hora en formato ISO
// console.log(ahora.getFullYear()); // Año actual
// ```

// 5.12 Métodos JSON, toJSON


// let fecha = new Date();
// let jsonFecha = fecha.toJSON(); // Fecha en formato JSON
// console.log(jsonFecha); // Ej: "2024-08-27T15:23:17.000Z"

// son ejemplos de cada uno aparte de los citados en java y los menores de aya 