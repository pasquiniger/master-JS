"use strict";

addEventListener("message", e =>{
    if (e.data.length < 10) {
        console.log(e.data);
        postMessage("todo bien")
    }
});

