"use strict";
let version = "version 3";
self.addEventListener("install", e=>{
    console.log("instalando service worker");
    caches.open(version).then(cache =>{
        cache.add("index.html").then(res=>{
            console.log("index cacheado")
        }).catch(e=> console.log(e))
    })
})

self.addEventListener("activate", ()=>{
    caches.keys().then(llave =>{
        return Promise.all(llave.map(cache=>{
            if (cache !== version){
                console.log("cache antiguo eliminado")
                return caches.delete(cache);
            }
        }))
    })
})
/*
self.addEventListener("fetch", e=>{
    e.respondWith(async function()=>{
        const respuestaEnCache = await caches.match(e.request);
        if (respuestaEnCache) return respuestaEnCache;
    })
}
// esto no me esta funcionando
*/
self.addEventListener("message", e => {
    console.log("Se ha interceptado el siguiente mensaje: " + e.data);
    e.source.postMessage("hola soy el sw te mando un saludo");
})
