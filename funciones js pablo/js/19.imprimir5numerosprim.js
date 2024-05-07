// Función para verificar si un número es primo
function numerosPrimos(numero) {
    // Casos base: 0 y 1 no son primos
    if (numero <= 1) {
      return false;
    }
  
    // Bucle para verificar divisibilidad desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      // Si el número es divisible por 'i', no es primo
      if (numero % i === 0) {
        return false;
      }
    }
  
    // Si el número no es divisible por ningún número en el rango, es primo
    return true;
  }
  
  // Función para imprimir números primos hasta un límite 'n'
  function imprimirPrimos(n) {
    // Contador para llevar la cuenta de los números primos encontrados
    let contador = 0;
  
    // Número inicial a evaluar como primo (2)
    let numero = 2;
  
    // Bucle 'while' para imprimir 'n' números primos
    while (contador < n) {
      // Si el número actual es primo, se imprime y se incrementa el contador
      if (numerosPrimos(numero)) {
        console.log(numero);
        contador++;
      }
  
      // Se incrementa el número para evaluar el siguiente
      numero++;
    }
  }
  
  // Ejemplo de uso: imprimir 5 números primos
  imprimirPrimos(5);
  