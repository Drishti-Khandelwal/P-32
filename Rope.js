class Rope{
    constructor(bodyA, pointB){
    var options ={
    bodyA:bodyA,
    pointB:pointB,
    stiffness: 0.04,
    length:10
    }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);   
    }

    display(){
   
    if(this.chain.bodyA){
    var pointA = this.chain.bodyA.position; //starting point
    var pointB = this.chain.pointB; // ending point
    push();
    strokeWeight(4);
    stroke(48,22,8);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop();
    }
    
    }
    fly(){
    this.chain.bodyA = null;
    
    
    }
    attach(body){
        this.chain.bodyA= body;
        
    }
    }
    
    