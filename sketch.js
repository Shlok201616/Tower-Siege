const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var gameState = "onSling";



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

ground=new Ground(600,380,200,4);
ground1=new Ground(1000,280,200,4); 
block1=new Block(600,260,10,20)
    
   // slingshot = new SlingShot(bird.body,{x:200, y:50});
}
function draw(){

    background(0,0,0);
   
   ground.display();
   ground1.display();
   block1.display();
   block2.display();
    // slingshot.display();  
    
}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
     Hexagon.trajectory = [];
        Body.setPosition(hexahonbody,{x:200,y:50});  
        slingshot.attach(hexahonbody.body);
        gameState = "onSling";
        
    }
}

