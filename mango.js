class Mango{
    constructor(x,y){
var options = {
isStatic : true,
restitution : 0,
friction: 1,
}
this.body = Bodies.circle(x,y,15,options);
this.img = loadImage("images/mango.png");
World.add(myWorld,this.body);

}


display(){
    var pos = this.body.position;   
    imageMode(CENTER);
    image(this.img,pos.x,pos.y,this.width,this.height);
 
   }

}

