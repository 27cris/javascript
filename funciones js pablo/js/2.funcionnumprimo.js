// Función para determinar si un número es primo
function esprimo(numero) {
  // - Si el número es menor o igual a 0, no es primo
  if (numero <= 0) return false;
  // - Si el número es 1, no es primo
  if (numero === 1) return false;

  // Recorrer desde 2 hasta la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Si el número es divisible por 'i', no es primo
    if (numero % i === 0) return false;
  }

  // Si no se encontró ningún divisor, el número es primo
  return true;
}

// Solicitar un número al usuario
let numero = parseInt(prompt("Ingrese un número: "));

// Determinar si el número es primo y almacenar el resultado
let resultado = esprimo(numero);

// Mostrar el resultado al usuario
console.log(numero, "es primo:", resultado);
