function enviardatos() {
    let dato = document.querySelector("#datos").value
        let nuevodato = document.createElement("li")
        nuevodato.textContent = dato
        let lista = document.querySelector("#listadatos")
        lista.appendChild(nuevodato)
        document.querySelector("#datos").value = ""
}

let ul = document.querySelector("ul")
console.log(ul)

let container = document.querySelector("#contenido")
console.log(container)

let titulo = document.querySelector("h1")
console.log (titulo)


ul.style.listStyle = "none"
titulo.style.margin = "0"
titulo.style.fontWeight = "bold"
titulo.style.textAlign = "center"
container.style.border = "1px solid black"
container.style.width = "96%"
container.style.height = "50vh"
container.style.padding = "20px"