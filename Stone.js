class patthar
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.4,
			friction:1,
			density:1.4

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		this.image=loadImage("stone.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			strokeWeight(3);
			fill(0,0,225)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}