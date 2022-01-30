"use strict";
const worker = new Worker("trabajador.js");
console.log(worker);

worker.addEventListener("message", e => {
    console.log(e.data)
})

document.getElementById("hola").addEventListener("click", ()=> ejecutarBucle());
const ejecutarBucle = () =>{
    worker.postMessage("holaaa")
    setTimeout(()=>{
        worker.terminate()
    },2000)
}