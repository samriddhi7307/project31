const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = []; 
function setup() {
	createCanvas(480, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof2 = new roof(5,750,5,300);
	roof1 = new roof(240,795,width,10);
	roof3 = new roof(85,750,5,300);
	roof10 = new roof(165,750,5,300);
	roof11 = new roof(250,750,5,300);
	roof12 = new roof(335,750,5,300);
	roof13 = new roof(420,750,5,300);
	p1 = new plinko(20,100);
	p2 = new plinko(50,100);
	p3 = new plinko(80,100);
	p4 = new plinko(110,100);
	p5 = new plinko(140,100);
	p6 = new plinko(170,100);
	p7 = new plinko(200,100);
	p8 = new plinko(230,100);
	p9 = new plinko(20,200);
	p10 = new plinko(50,200);
	p11 = new plinko(80,200);
	p12 = new plinko(110,200);
	p13 = new plinko(140,200);
	p14 = new plinko(170,200);
	p15 = new plinko(200,200);
	p16 = new plinko(230,200);
	p17 = new plinko(5,150);
	p18 = new plinko(35,150);
	p19 = new plinko(95,150);
	p20 = new plinko(185,150);
	p21 = new plinko(155,150);
	p22 = new plinko(215,150);
	p23 = new plinko(65,150);
	p24 = new plinko(125,150);
	p25 = new plinko(5,250);
	p26 = new plinko(30,250);
	p27 = new plinko(90,250);
	p28 = new plinko(180,250);
	p29 = new plinko(150,250);
	p30 = new plinko(210,250);
	p31 = new plinko(60,250);
	p32 = new plinko(120,250);
	
	Engine.run(engine);
}

	function draw() {
		
	background(0);
	rectMode(CENTER);

	Engine.update(engine);
	p1.display();
	p2.display();
	p3.display();
	p4.display();
	p5.display();
	p6.display();
	p7.display();
	p8.display();
	p9.display();
	p10.display();
	p11.display();
	p12.display();
	p13.display();
	p14.display();
	p15.display();
	p16.display();
	p17.display();
	p18.display();
	p19.display();
	p20.display();
	p21.display();
	p22.display();
	p23.display();
	p24.display();
	p25.display();
	p26.display();
	p27.display();
	p28.display();
	p29.display();
	p30.display();
	p31.display();
	p32.display();
	roof1.display();
	roof12.display();
	roof13.display();
	roof11.display();
	roof10.display();
	roof2.display();
	roof3.display();
	if(frameCount%60===0){
		particles.push(new particle(random(width/2-480, width/2+200),7.5,7.5));
		//score++;
	                                                                          
		 }
		 for(var j = 0; j <particles.length;j++){
			 particles[j].display();
		 }
	
}