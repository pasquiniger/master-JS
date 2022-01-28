"use strict";

const addZeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

//en la funcion de arriba no use un else porque, al usar return, la funcion termina, y si el if es falso entonces no ejecutaria el primer return sino que seguiria directamente con el siguiente


const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let minutos = addZeros(time.getMinutes());
    let segundos = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = minutos;
    document.querySelector(".seg").textContent = segundos
}
actualizarHora();
setInterval(actualizarHora,1000);

//De todas formas setInterval consume muchos recursos y no es recomendado para este tipo de trabajos
