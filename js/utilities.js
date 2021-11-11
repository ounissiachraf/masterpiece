'use strict'

function getcolor()
{

    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    
    const opacity = Math.random();

    return "rgba("+red+","+blue+","+green+","+opacity+")";
}

