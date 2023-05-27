const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over'

let number = 0;
let scale = 10;
let hue = Math.random() * 360;

//Recursión: es un loop infinito que se logra creando una función, la cual se repetirá a sí misma.
function drawFlower(){

    let angle = number * 3.7; //En esta es para cambiar la figuraque dibuja
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;

    ctx.fillStyle = 'hsl('+ hue +', 100%, 50%)';
    ctx.strokeStyle='#17ff0f';

    // ctx.shadowBlur= 5;
    // ctx.shadowColor = "gray";
    // ctx.shadowOffsetX = 5;
    // ctx.shadowOffsetY = 5;
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.arc(positionX, positionY, 8, 0, Math.PI * 2); //Cambiar el número (posicion 3) para cambiar el tamaño del círculo
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;

    hue++;
}



function animate(){
    //draw each frame
   // ctx.clearRect(0,0, canvas.width, canvas.height);

    // //size +=0.15;
    // positionX +=5 * Math.sin(angle);
    // positionY +=5 * Math.cos(angle);
   // angle += 0.1;
   if (number > 2000) {
    return
}

    drawFlower();
    requestAnimationFrame(animate);
}

animate()