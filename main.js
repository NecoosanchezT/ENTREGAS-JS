// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

// function parOimpar(numero) {
//   if (numero % 2 == 0) {
//     console.log(numero + " es par");
//   } else {
//     console.log(numero + " es impar");
//   }
// }

// parOimpar(6);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

// function mayorOigual(numero1, numero2) {
//   if (numero1 > numero2) {
//     console.log(numero1 + " es mayor");
//   } else if (numero2 > numero1) {
//     console.log(numero2 + " es mayor");
//   } else {
//     console.log("Los números son iguales");
//   }
// }
// mayorOigual(10, 10);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// function múltiplo(numero) {
//   if (numero % 5 == 0) {
//     console.log(numero + " es múltiplo de 5");
//   } else {
//     console.log(numero + " no es múltiplo de 5");
//   }
// }

// múltiplo(10);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

// function contador(numero) {
//   for (let i = 0; i <= numero; i++) {
//     console.log(i);
//   }
// }

// contador(10);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// function repeticion(numero, palabra) {
//   const repeticion = palabra.repeat(numero);
//   console.log(repeticion);
// }
// repeticion(5, " TALLERES ");

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// function juegos() {
//   const juegos = [
//     "starfield",
//     "forza horizon",
//     "halo",
//     "state of decay",
//     "GTFO",
//   ];
//   for (let i = 0; i < 5; i++) {
//     console.log(juegos[i]);
//   }
// }

// juegos();

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// function arrayNumeros(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== 4) {
//       console.log(arr[i]);
//     }
//   }
// }
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arrayNumeros(numeros);

function multiplicacion(numero, multiplicador) {
  for (let i = 0; i < numero.length; i++) {
    const resultado = numero[i] * multiplicador;
    console.log(resultado);
  }
}

const numero = [5, 7, 9, 12];
const multiplicador = [5];

multiplicacion(numero, multiplicador);
