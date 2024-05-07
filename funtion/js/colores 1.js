console.log('trabajando desde js')

//para definir los botones y el cuadro
var amarillo = document.querySelector('#coloramarillo');
var azul = document.querySelector('#colorazul');
var rojo = document.querySelector('#colorrojo');
var gris = document.querySelector('#colorgris');
var sincolor = document.querySelector('#sincolor');
var cuadro = document.querySelector('#cuadro');

//styles para el titulo
var titulo = document.querySelector('h1');
titulo.style.textAlign = "center";

//styles para el contenedor de los botones
var botonesContainer = document.querySelector('#botones');
botonesContainer.style.display = "flex";
botonesContainer.style.flexDirection = "column";
botonesContainer.style.width = "30vw";
botonesContainer.style.gap = "10px";

//los styles para contenedor principal
var container = document.querySelector('#container');
container.style.height = "80vh";
container.style.display = "flex";

//stylos al cuadro
cuadro.style.border = "1px solid black";
cuadro.style.width = "50vw";
cuadro.style.float = "right"; // Mover el cuadro al lado derecho

//Función para cambiar el color del cuadro
function cambiarColor(color) {
    console.log('buscando color ' + color);
    cuadro.style.backgroundColor = color;
}

//Añadimos los addEventListene a los botones
amarillo.addEventListener('click', function() {
    cambiarColor('yellow');
});

azul.addEventListener('click', function() {
    cambiarColor('blue');
});

rojo.addEventListener('click', function() {
    cambiarColor('red');
});

gris.addEventListener('click', function() {
    cambiarColor('grey');
});

sincolor.addEventListener('click', function() {
    cambiarColor('white');
});
