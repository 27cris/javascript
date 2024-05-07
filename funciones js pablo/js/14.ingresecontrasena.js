// Función para pedir la contraseña al usuario
function pedirContrasena() {
    // Variable para almacenar la contraseña ingresada por el usuario
    let contrasenaIngresada;
  
    // Bucle `do-while` para seguir pidiendo la contraseña hasta que sea correcta
    do {
      // Solicita la contraseña al usuario mediante un mensaje emergente
      contrasenaIngresada = prompt("Ingrese la contraseña (12345): ");
  
      // Comprueba si la contraseña ingresada es diferente a la correcta ("12345")
    } while (contrasenaIngresada !== "12345");
  
    // Si se sale del bucle, significa que se ingresó la contraseña correcta
    console.log("¡Contraseña correcta!");
  }
  
  // Llama a la función para solicitar la contraseña al usuario
  pedirContrasena();  