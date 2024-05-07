// Función para pedir un número al usuario y verificar que esté entre 1 y 5
function pedirNumeroEntre1y5() {
    let numeroIngresado;
  
    // Bucle para seguir pidiendo el número hasta que sea válido
    do {
      numeroIngresado = parseInt(prompt("Ingrese un número entre 1 y 5: "));
  
      // Verifica si el número ingresado es válido (entre 1 y 5)
      if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 5) {
        console.error("Error: El número ingresado debe estar entre 1 y 5.");
      }
    } while (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 5);
  
    // Si el número es válido, retorna el valor ingresado
    return numeroIngresado;
  }
  
  // Ejemplo de uso de la función
  const numero = pedirNumeroEntre1y5();
  console.log("El número ingresado es:", numero);
  