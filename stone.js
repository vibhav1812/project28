class Stone{
    constructor(x,y){
var options = {
isStatic : false,
restitution : 0,
friction: 1,
density : 1.2 
}
this.body = Bodies.rectangle(x,y,20,20,options);
this.img = loadImage("images/stone.png");
World.add(myWorld,this.body);

}


display(){
    imageMode(CENTER)
    image(this.img,pos.x,pos.y,this.width,this.height)
   }

}