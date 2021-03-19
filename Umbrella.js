class Umbrella {
    constructor() {
        this.Umbrella = Bodies.circle(150,350,90,{isStatic:true});
        this.x = 150;
        this.y = 350;
        this.radius = 50;
        this.img = loadImage("umbrella.png");
        World.add(world, this.Umbrella);
    }
    display() {
        imageMode(CENTER);
        image(this.img, this.x,this.y-20,150,150);
    }
}