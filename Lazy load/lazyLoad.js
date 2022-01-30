"use strict";
const publicaciones = document.getElementById("publications-container");
var contador = 0

const cargarMasPublis = entry => {
    if (entry[0].isIntersecting) cargarPublicaciones(4)
}
const observer = new IntersectionObserver(cargarMasPublis);


const createPublicationCode  = (nombre,content) =>{
    const container = document.createElement("DIV");
    const description = document.createElement("P");
    const h3 = document.createElement("H3");
    const comentarios = document.createElement("DIV")
    const textComment = document.createElement("INPUT");
    const sendBtn = document.createElement("INPUT");
    container.classList.add("publicaciones");
    comentarios.classList.add("comentarios");
    textComment.classList.add("comentario");
    textComment.setAttribute("placeholder","introduzca un comentario");
    sendBtn.classList.add("enviar");
    sendBtn.setAttribute("type","submit")

    description.textContent = content;
    h3.textContent = nombre;

    comentarios.appendChild(textComment);
    comentarios.appendChild(sendBtn);
    container.appendChild(h3);
    container.appendChild(description);
    container.appendChild(comentarios);
    return container
}

const cargarPublicaciones = async num =>{
    const request = await fetch("informaciondos.txt");
    const arrEspera = await request.json();
    const arr = arrEspera.content;
    const fragment = document.createDocumentFragment();
    for (let i=0; i < num; i++){
        if (arr[contador] !== undefined){
            const newPublication = createPublicationCode(arr[contador].nombre, arr[contador].contenido);
            fragment.appendChild(newPublication);
            contador++;
            if (i == num-1) observer.observe(newPublication)
        }
        else {
            if (publicaciones.lastElementChild.id !== "noMore"){
                let noHayMas = document.createElement("H3");
                noHayMas.textContent = "No hay mas publicaciones";
                noHayMas.id= "noMore"
                fragment.appendChild(noHayMas);
                publicaciones.appendChild(fragment);
                }
            break;
        }
    }
    publicaciones.appendChild(fragment)
}

cargarPublicaciones(5)