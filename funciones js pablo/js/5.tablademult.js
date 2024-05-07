// Función para imprimir la tabla de multiplicar de un número dado
function tablaMultiplicar(numeroTabla) {
    // Recorre desde 1 hasta 10
    for (let i = 1; i <= 10; i++) {
      // Construye una cadena con la multiplicación actual
      const resultado = `${numeroTabla} x ${i} = ${numeroTabla * i}`;
      // Imprime la cadena con el resultado
      console.log(resultado);
    }
}
  
  // Solicita el número al usuario
  let numeroTabla = parseInt(prompt("Ingrese el número del que deseas la tabla de multiplicar: "));
  
  // Llama a la función para imprimir la tabla del número ingresado
  tablaMultiplicar(numeroTabla);
  