class Tree{
    constructor(x,y){
var options = {
isStatic : true 
}
this.body = Bodies.rectangle(x,y,20,20,options);
this.img = loadImage("images/tree.png");
World.add(myWorld,this.body);

}


display(){
    imageMode(CENTER)
    image(this.img,pos.x,pos.y,this.width,this.height)
   }

}

