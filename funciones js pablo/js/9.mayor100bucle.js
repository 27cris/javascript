// Función para pedir un número mayor que 100 al usuario
function pedirNumero() {
    // Variable para almacenar el número ingresado
    let numero;
  
    // Bucle para seguir pidiendo el número hasta que sea mayor que 100 y válido
    do {
      // Solicitar el número al usuario y convertirlo a un número flotante
      numero = parseFloat(prompt("Ingrese un número mayor que 100: "));
  
      // Validar si el número ingresado es un número válido (no NaN)
      if (isNaN(numero)) {
        alert("Debe ingresar un número."); // Mensaje de error si el valor no es un número
      } else if (numero <= 100) {
        alert("El número debe ser mayor que 100."); // Mensaje de error si el número es menor o igual que 100
      }
    } while (isNaN(numero) || numero <= 100); // Continuar el bucle mientras no sea válido o <= 100
  
    // Devolver el número ingresado válido
    return numero;
  }
  
  // Solicitar el número al usuario y almacenar el resultado
  let numeroIngresado = pedirNumero();
  
  // Mostrar el número ingresado en la consola
  console.log("El número ingresado es:", numeroIngresado);
  
  