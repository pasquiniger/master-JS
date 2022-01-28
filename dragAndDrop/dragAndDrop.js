"use strict";
const zona = document.querySelector(".zona");
zona.addEventListener("dragover", (e)=>{
    e.preventDefault();
})
zona.addEventListener("drop", (e)=>{
    let n = e.dataTransfer.getData("textura")
    zona.style.background = `url("textura${n}.jpeg")`
})

const texturas = document.querySelector(".texturas")
for (let i=1; i <= texturas.children.length; i++) {
    document.querySelector(`.textura${i}`).addEventListener("dragstart", (e)=>transferirTextura(i,e))
}

const transferirTextura = (n,e) =>{
    e.dataTransfer.setData("textura",n)
}