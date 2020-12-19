class Paper {  
  constructor(x, y, w, h){
      var options = {
          'restitution':0,
          'friction':0,
          'density':1.2,
          'isStatic' : false
      }
      this.width = w;
      this.height = h;
      this.body = Bodies.circle(x, y, 20, options);
      this.image = loadImage("paper.png");
    World.add(world, this.body);

 }
 display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  rotate(angle);
  imageMode(CENTER);
  image(this.image, pos.x, pos.y, this.width, this.height);
 }
}