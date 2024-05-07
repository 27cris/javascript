function pedirNumeroPositivo() {
    let numeroIngresado;
  
    do {
      numeroIngresado = parseInt(prompt("Ingrese un número positivo: "));
  
      if (isNaN(numeroIngresado) || numeroIngresado <= 0) {
        console.error("Error: El valor ingresado no es un número positivo.");
      }
    } while (isNaN(numeroIngresado) || numeroIngresado <= 0);
  
    return numeroIngresado;
  }
  
  // Ejemplo de uso
  const numeroPositivo = pedirNumeroPositivo();
  console.log("Número positivo ingresado:", numeroPositivo);  