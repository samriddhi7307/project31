class particle
{
 constructor (x,y,r)
 {
  
 var options={
    'restitution' : 0.3
 }
 this.body = Bodies.circle(x,y,r,options)
 this.color = (random(0,255),random(0,255),random(0,255));
 this.r = r;
 World.add(world,this.body);
 }

 display()
 {
    var pos = this.body.position;
    push();
	translate(pos.x , pos.y);
   imageMode(CENTER);
   ellipseMode(RADIUS);
   fill(this.color);
   ellipse(pos.x,pos.y,this.r,this.r);  
   pop(); 
 }
}; 
