class Paper{
    constructor(x,y,radius){
        var  options = {
            isStactic : false , 
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circles(x,y,width,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellispse(this.bosy.position.x, this.body.position.y,this,this.radius);
    }
}