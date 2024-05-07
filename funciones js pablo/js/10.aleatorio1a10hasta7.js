// Función para generar un número aleatorio hasta obtener un 7
function generarNumeroAleatorioHasta7() {
  // Bucle infinito para seguir generando números hasta cumplir la condición
  while (true) {
    // Genera un número aleatorio entre 1 y 10
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    
    //Explicación de la generación del número aleatorio:
    // 1. Math.random() genera un número decimal aleatorio entre 0 (inclusivo) y 1 (exclusivo).
    // 2. Se multiplica por 10 para obtener un rango de 0 a 9.99.
    // 3. Math.floor redondea al entero inferior más cercano.
    // 4. Se suma 1 para obtener un número entre 1 y 10.

    // Verifica si el número generado es igual a 7
    if (numeroAleatorio === 7) {
      // Si es 7, retorna el número ganador y finaliza el bucle
      return numeroAleatorio;
    } else {
      // Si no es 7, imprime el número aleatorio en la consola (opcional)
      console.log(numeroAleatorio);
    }
  }
}

// Llama a la función para generar el número ganador y almacena en una variable
const numeroGanador = generarNumeroAleatorioHasta7();

// Imprime un mensaje con el número ganador en la consola
console.log("¡El número ganador es:", numeroGanador);
