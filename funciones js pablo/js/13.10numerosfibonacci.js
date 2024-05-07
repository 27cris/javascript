// Función para calcular y mostrar los primeros n números de la serie de Fibonacci
function fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Función para imprimir los primeros 10 números de la serie de Fibonacci
  function imprimirFibonacci10() {
    for (let i = 0; i < 10; i++) {
      console.log(fibonacci(i));
    }
  }
  
  // Ejemplo de uso
  imprimirFibonacci10();  