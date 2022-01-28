/*
"use strict";
const archivo = document.getElementById("archivo");

//el evento "change" es para cuando el objeto cambia su valor
archivo.addEventListener("change", e => leerArchivo(archivo.files))

const leerArchivo = ar =>{
    for (let i = 0; i < ar.length ; i++){
        const reader = new FileReader();
        reader.readAsText(ar[i]);
        reader.addEventListener("load", e => console.log(e.currentTarget))
    }
}

*/

/*

//DEBO CORREGIR ESTO

"use strict";
const archivo = document.getElementById("archivo");

//el evento "change" es para cuando el objeto cambia su valor
archivo.addEventListener("change", e => leerArchivo(archivo.files))

const leerArchivo = ar =>{
    const fragmento = document.createDocumentFragment;
    const resultado = document.querySelector(".resultado");
    for (let i = 0; i < ar.length ; i++){
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load", e => {
            let newImg = document.createElement("IMG");
            newImg.setAttribute("src", `${e.currentTarget.result}`)
            fragmento.appendChild(newImg)
        })
    }
    resultado.appendChild(fragmento)
}


*/