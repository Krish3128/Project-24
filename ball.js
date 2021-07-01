class Ball {
    constructor(x, y) {
      var options = {
        //  isStatic=false,
          'restitution':0.4,
          'friction':0.5,
          'density':1.2
      }
    this.body = Matter.Bodies.circle(x,y,30,options);
     this.radius = 30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      circle(pos.x, pos.y, this.radius);
     
    }
}