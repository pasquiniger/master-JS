"use strict";
const cajas = document.querySelectorAll(".caja");

const verifyVisibility = entries =>{
    for (let entry of entries){
        if (entry.isIntersecting) console.log("se esta viendo la caja", entry.target.textContent)
    }
}

const observer = new IntersectionObserver(verifyVisibility);

for (const caja of cajas){
    observer.observe(caja)
}
