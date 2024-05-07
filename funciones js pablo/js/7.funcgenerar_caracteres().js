// Función para generar una cadena de caracteres específica
function generarCaracteres(n, caracter) {
  // Verificar si los argumentos son válidos
  if (typeof n !== 'number' || typeof caracter !== 'string' || caracter.length !== 1) {
    console.error("Error: Argumentos inválidos. 'n' debe ser un número y 'caracter' debe ser una cadena de un solo caracter.");
    return; // Detiene la función si hay errores
  }

  // Variable para almacenar la cadena resultante
  let resultado = '';

  // Recorre 'n' veces para generar la cadena
  for (let i = 0; i < n; i++) {
    // Concatena el caracter a la cadena resultante
    resultado += caracter;
  }

  // Regresa la cadena generada
  return resultado;
}

// Ejemplo de uso: genera una cadena de 5 'x'
console.log(generarCaracteres(5, 'x')); // Imprime "xxxxx"
