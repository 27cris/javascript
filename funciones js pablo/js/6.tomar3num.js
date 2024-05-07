// Función para encontrar el número mayor de tres
function numeroMayor(numero1, numero2, numero3) {
  // Verificar si los tres números son válidos (números)
  if (typeof numero1 !== "number" || typeof numero2 !== "number" || typeof numero3 !== "number") {
    // Manejar entradas no válidas (por ejemplo, no un número)
    console.error("Error: Entrada no válida. Todos los argumentos deben ser números.");
    return; // Salir de la función si se detecta una entrada no válida
  }

  // Inicializar una variable para almacenar el número mayor actual
  let mayor = numero1;

  // Comparar el segundo número con el mayor actual
  if (numero2 > mayor) {
    mayor = numero2;
  }

  // Comparar el tercer número con el mayor actual
  if (numero3 > mayor) {
    mayor = numero3;
  }

  // Comprobar si los tres números son iguales
  if (numero1 === numero2 && numero2 === numero3) {
    return "Son iguales"; // Devolver "Son iguales" si todos los números son iguales
  } else {
    return mayor; // Devolver el número mayor de lo contrario
  }
}

// Solicitar al usuario que ingrese los tres números
let numero1 = parseInt(prompt("Ingrese el primer número: "));
let numero2 = parseInt(prompt("Ingrese el segundo número: "));
let numero3 = parseInt(prompt("Ingrese el tercer número: "));

// Llamar a la función para encontrar el número mayor
let resultado = numeroMayor(numero1, numero2, numero3);

// Mostrar el resultado
console.log("El número mayor es:", resultado);

  