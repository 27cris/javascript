// Función para imprimir números pares del 0 al 20
function imprimirParesHasta20() {
    // Ciclo for para recorrer desde 0 hasta 20 (inclusive)
    for (let i = 0; i <= 20; i++) {
      // Verifica si el número actual (i) es par utilizando el operador módulo
      if (i % 2 === 0) {
        // Si es par, imprime el número en la consola
        console.log(i);
      }
    }
  }
  
  // Llama a la función para imprimir los números pares
  imprimirParesHasta20();
  