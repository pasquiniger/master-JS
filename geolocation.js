"use strict";
const geolocation = navigator.geolocation;
console.log(geolocation)

const posicion = (e)=>{
    console.log(e)
}

const err = e => console.log(e);

const options = {
    maximumAge: 0,
    timeout: 3000,
    enableHightAcciracy: true
}

geolocation.getCurrentPosition(posicion, err, options)

// Esto me devolveria la posicion.

