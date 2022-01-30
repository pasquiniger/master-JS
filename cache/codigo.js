"use strict";
caches.open("archivos-estaticos").then(cache=>{
    console.log(cache)
    cache.add("index.html")
    cache.match("index.html").then(res => console.log(res))
})
