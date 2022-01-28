/*

//Esto de aca es lo mismo que va a haber abajo, funcionaria igual

// "use strict";

// this.nombre = "esteban";

// const saludar = function(){
//     console.log(this.nombre)
// }

// const objeto = {
//     nombre : "lucas",
//     saludar : saludar
// }

// objeto.saludar()



//Esta seria la forma resumida
// "use strict";

// this.nombre = "esteban";

// const saludar = function(){
//     console.log(this.nombre)
// }

// const objeto = {
//     nombre,
//     saludar
// }

// objeto.saludar()

*/






/*

// Esto demuestra el comportamiento de this dependiendo de la funcion
"use strict";

this.nombre = "esteban";

const objeto = {
    nombre : "lucas",
    saludar : ()=>{
        console.log(`hola ${this.nombre}`)
    }
}

function otroContext(){
    ////si le pusiera un let, esto cambiaria completamente
    nombre = "Roberto";
    objeto.saludar()
}

//// aca se ve como el this de la funcion flecha llama al this del window
objeto.saludar()

////aca se ve como llama al this de la funcion
otroContext()


//// ya redefinimos la variable nombre, asi que objeto.saludar mostrara roberto
objeto.saludar()

*/


"use strict";

this.nombre = "esteban";

function saludar(){
    console.log(`Hola ${this.nombre}`)
}

const objeto = {
    nombre : "lucas",
    saludar
}

function otroContext(){
    this.nombre = "Roberto";
    this.saludar = saludar
}

const objeto2 = new otroContext();

objeto.saludar();
objeto2.saludar();
console.log(this.nombre)


