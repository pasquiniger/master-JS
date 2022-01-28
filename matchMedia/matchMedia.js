"use strict";
const mq = matchMedia("(max-width: 500px)");
const caja = document.querySelector(".caja");

console.log(mq)

mq.addEventListener("change", ()=> {
    if (mq.matches==true) caja.classList.replace("caja","responsive-caja")
    else caja.classList.replace("responsive-caja","caja")
});
