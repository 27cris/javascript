// Función para imprimir números pares hasta un límite dado
function imprimirPares(limite) {
  // Recorre desde 2 hasta el límite ingresado, incrementando de 2 en 2
  for (let i = 2; i <= limite; i += 2) {
    // Imprime el número par actual
    console.log(i);
  }
}

// Solicita el límite al usuario
let limite = parseInt(prompt("Escribe el límite de números pares: "));

// Llama a la función para imprimir los pares hasta el límite
imprimirPares(limite);
