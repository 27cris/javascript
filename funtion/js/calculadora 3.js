console.log('Calculadora desde consola js');

function sumar(valor1, valor2) {
    const resultado = valor1 + valor2;
    document.getElementById("resultado").textContent = resultado;
}

function resta(valor1, valor2) {
    const resultado = valor1 - valor2;
    document.getElementById("resultado").textContent = resultado;
}

function multiplicacion(valor1, valor2) {
    const resultado = valor1 * valor2;
    document.getElementById("resultado").textContent = resultado;
}

function division(valor1, valor2) {
    if (valor2 === 0) {
        document.getElementById("resultado").textContent = "Error: División por cero";
    } else {
        const resultado = valor1 / valor2;
        document.getElementById("resultado").textContent = resultado;
    }
}

function limpiar() {
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("resultado").textContent = "";
}
