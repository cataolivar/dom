//DOM 

let click = document.getElementsByTagName ("header");

//Crear elementos manipulando el DOM. 
// opcion 1

click.innerHTML ="<h1>Toca aqui!!!</h1>"
console.log (click.innerHTML)

//Modificar etiquetas existentes.

click.innerTexto = "Haz click aqui!!!"
console.log (click.innerTexto)

// opcion 2

let click1 = document.getElementsByTagName ("header");

click1 = document.createElement ("h2");
click1.innerHTML = "Hola!";
document.body.append (click1);
