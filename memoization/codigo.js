"use strict";

let cache = [];
const memoizer = func =>{
    return e =>{
        const index = e.toString();
        if (cache[index] == undefined){
            cache[index] = func(e);
        }
        return cache[index]
    }
}

const hacerAlgo = num =>{
    const a = 20;
    const b = 12;
    var c = 0;
    for (let i = num -1; i >= 0; i--){
        for (let j = i -1; j >= 0; j--){
            c += a*b
        }
    }
    return c
}

//sin memoizer
console.log("sin memo");
for (let i = 0; i < 6; i++){
    const tiempo = new Date();
    hacerAlgo(60000);
    console.log(new Date() - tiempo);
}

//con memoizer
const memo = memoizer(hacerAlgo)
console.log("con memo")
for (let i = 0; i<6; i++){
    const tiempo = new Date();
    memo(60000)
    console.log(new Date() - tiempo);
}
