class Paper{
    constructor(x,y){
    
        var options = {
        isStatic:false,
        //restitution:0.3,
        //friction:0.5,
        //density:1.2
        }
    

    this.body = Bodies.circle(x,y,25,options);
    this.diameter=50;
    //this.height=20;
    World.add(world, this.body);
    
    }
    
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    //rectMode(CENTER);
    circle(0,0,this.diameter);
    pop();
    }
    }