class Objeto {
    constructor(){

    }
    hablar(){
        console.log("hola")
    }
}

const objeto = new Objeto();

objeto.__proto__.hablar = () => console.log("modificado afuera");

let arr = [];

arr.__proto__ = objeto.__proto__;

console.log(arr)