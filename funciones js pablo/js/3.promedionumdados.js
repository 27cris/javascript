// Función para calcular el promedio de un array de números
function promedio(numeros) {
  // Variable para almacenar la suma de los números
  let suma = 0;

  // Recorrer cada número en el array 'numeros'
  for (let numero of numeros) {
    // Sumar el número actual a la variable 'suma'
    suma = suma + numero;
  }

  // Calcular el promedio dividiendo la suma por la longitud del array
  let resultado = suma / numeros.length;

  // Devolver el valor del promedio
  return resultado;
}

// Array de números para calcular el promedio
let numerosPro = [14, 10, 45, 7];

// Calcular el promedio del array 'numerosPro'
let promedioNumeros = promedio(numerosPro);

// Mostrar el resultado al usuario
console.log("El promedio de los números es:", promedioNumeros);

