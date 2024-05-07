// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) {
      return false; // 1 y números menores que 1 no son primos
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false; // Si es divisible por otro número (distinto de 1 y sí mismo), no es primo
      }
    }
  
    return true; // Si no es divisible por ningún otro número, es primo
  }
  
  // Función para imprimir los primeros 5 números primos
  function imprimirPrimeros5Primos() {
    let numeroActual = 2; // Comienza en 2, ya que 1 no es primo
    let contadorPrimosEncontrados = 0;
  
    while (contadorPrimosEncontrados < 5) {
      if (esPrimo(numeroActual)) {
        console.log(numeroActual); // Imprime el número primo encontrado
        contadorPrimosEncontrados++; // Incrementa el contador de primos encontrados
      }
  
      numeroActual++; // Pasa al siguiente número
    }
  }
  
  // Ejemplo de uso
  imprimirPrimeros5Primos();  