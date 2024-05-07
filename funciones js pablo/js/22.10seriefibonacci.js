// Función para imprimir la secuencia de Fibonacci hasta un número 'n'

function imprimirFibonacci2(n) {
    // Validación de entrada: verifica el tipo de dato y valor del número
  
    if (n <= 0 || typeof n !== 'number' || isNaN(n)) {
      console.error("Error: El valor ingresado debe ser un número entero positivo.");
      return; // Termina la función si la entrada es inválida
    }
  
    // Variables para almacenar los dos últimos números de la secuencia
    let a = 0; // Primer número (0)
    let b = 1; // Segundo número (1)
  
    // Bucle 'for' para iterar 'n' veces e imprimir los números de Fibonacci
    for (let i = 0; i < n; i++) {
      // Imprime el valor actual de 'a' (correspondiente al número de Fibonacci)
      console.log(a);
  
      // Calcula el siguiente número de Fibonacci (suma de 'a' y 'b')
      const siguiente = a + b;
  
      // Actualiza los valores de 'a' y 'b' para el siguiente cálculo
      a = b;
      b = siguiente;
    }
  }
  
  // Ejemplo de uso: imprime la secuencia de Fibonacci hasta el número 10
  imprimirFibonacci2(10);
  