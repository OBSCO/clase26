class Boat{
    constructor(x,y,width,heigth,boatPos){
        var options ={
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,heigth,boatPos);
        this.width = width;
        this.heigth = heigth;

        this.image = loadImage("./assets/boat.png");
        this.boatPosition = boatPos;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0, this.boatPosition, this.width, this.heigth);
        pop();
    }

    remove(index){
        setTimeout(() =>{
           Matter.World.remove(world,boats[index].body);
           delete boats[index];
        }, 2000 );
    }
}