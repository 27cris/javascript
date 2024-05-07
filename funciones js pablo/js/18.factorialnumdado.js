// Función para calcular el factorial de un número

function calcularFactorial(numero) {
    // Validación de entrada: verifica el tipo de dato y valor del número
  
    if (typeof numero !== 'number' || numero < 0 || !Number.isInteger(numero)) {
      console.error("Error: El número ingresado debe ser un entero no negativo.");
      return; // Termina la función si la entrada es inválida
    }
  
    // Variable para almacenar el factorial acumulado
    let factorial = 1;
  
    // Bucle `for` para multiplicar el factorial por cada número desde 1 hasta el número dado
    for (let i = 1; i <= numero; i++) {
      factorial *= i; // Multiplica el factorial por el valor actual de `i`
    }
  
    // Retorna el factorial calculado
    return factorial;
  }
  
  // Ejemplo de uso: llamada a la función con un valor válido
  console.log(calcularFactorial(7)); // Imprime el factorial de 7
  