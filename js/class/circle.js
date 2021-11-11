
class circle{

    constructor(){

        this.color='red';
        this.radius=15;
        this.position={x:0,y:0};
    }

    
    setRadius(radius){
        this.radius=radius;
    }
    setColor(color){
        this.color=color;
    }
    setPosition(position){
        this.position=position;
    }

    draw(context)
    {
        context.save();
        context.fillStyle = this.color;

        context.beginPath();
        context.arc(this.position.x, this.position.y,this.radius,0, 2*Math.PI);

        context.fill();

        context.restore();

    }

}