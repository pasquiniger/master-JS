"user strict";
console.log(navigator.serviceWorker);
//si nuestro navegador no tuviera service worker nos devolveria un valor undefined o algun error

if (navigator.serviceWorker) navigator.serviceWorker.register("sw.js");

setTimeout(()=>{
    navigator.serviceWorker.ready.then(res => res.active.postMessage("hola bro"))
}, 3000)

navigator.serviceWorker.addEventListener("message", e=>{
    console.log("El service worker nos ha enviado el siguiente mensaje: " + e.data)
})