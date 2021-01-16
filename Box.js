class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility= 255;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height)
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
        }
        else{World.remove(world,this.body)
        this.Visibility = this.Visibility-5;
        }

      }
      score(){
        if(this.Visibility===0){
          score= score+1;
        }
       } 
}

