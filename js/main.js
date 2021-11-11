'use strict'

let canvas;
let context;
function getposition(event){
    const offset= canvas.getBoundingClientRect();

    const styles= window.getComputedStyle(canvas);

    const position = {
        x: event.clientX - offset.left - parseInt(styles.borderLeftWidth),
        y: event.clientY - offset.top - parseInt(styles.borderTopWidth)
    };

    // Retour du résultat
    return position;
} 

function getcircle(event){
    const position=getposition(event);

    const radius= Math.floor(Math.random()*50)+10;

    const color=getcolor();

    const C= new circle();

    C.setRadius(radius);
    C.setPosition(position);
    C.setColor(color);

    C.draw(context);


}

document.addEventListener('DOMContentLoaded',function(){
    canvas = document.querySelector('#masterpiece');
    context=canvas.getContext('2d');
    canvas.addEventListener('click',getcircle);
});