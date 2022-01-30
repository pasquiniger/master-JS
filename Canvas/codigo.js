"user strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const dif = canvas.getBoundingClientRect();

let painting, color, lineWidth, difX, difY;

canvas.addEventListener("mousedown", e =>{
    difX = e.clientX - difX;
    difY = e.clientY - difY;
    painting = true;
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("lw").value;
    ctx.beginPath();
});

canvas.addEventListener("mousemove", e=>{
    if (painting){
        dibujar(difX,difY,e.clientX - dif.left, e.clientY - dif.top);
        difX = e.clientX - difY.left;
        difY = e.clientY - difX.top;
    }
})

canvas.addEventListener("mouseup", ()=>{
    ctx.closePath();
    painting = false
})

const dibujar = (x1,y1,x2,y2)=>{
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}