// Función para imprimir la secuencia FizzBuzz del 1 al 100
function imprimirFizzBuzz() {
    // Bucle for para iterar desde 1 hasta 100
    for (let i = 1; i <= 100; i++) {
      // Variable para almacenar el resultado final (Fizz, Buzz, FizzBuzz o el número)
      let resultado = "";
  
      // Verifica si el número es divisible por 3 y agrega "Fizz" al resultado
      if (i % 3 === 0) {
        resultado += "Fizz";
      }
  
      // Verifica si el número es divisible por 5 y agrega "Buzz" al resultado
      if (i % 5 === 0) {
        resultado += "Buzz";
      }
  
      // Si el resultado está vacío (no se aplica ni Fizz ni Buzz), agrega el número
      if (resultado === "") {
        resultado = i;
      }
  
      // Imprime el resultado final (Fizz, Buzz, FizzBuzz o el número)
      console.log(resultado);
    }
  }
  
  // Llamada a la función para ejecutar el código FizzBuzz
  imprimirFizzBuzz();
  