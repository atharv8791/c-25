class Dust {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution :0.3,
          friction :0.5,
          density :1.2,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.dustbin = loadImage("dustbingreen.png");
    }
    display(){
      imageMode(CENTER);
      image(this.dustbin,0,-100,200,200);
    }
}