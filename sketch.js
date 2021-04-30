
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// creating the global variables

var engine , world,
var drops = []
var maxDrops = 100;
var umbrella;
var rand;
var lightning1 ,lightning2 , lightning3 , lightning4;
var thunderCreateFrame = 0;


function preload(){

    //assigning the images to the variables

    lightning1 = loadImage("images/thunderbolt/1.png");
    lightning2 = loadImage("images/thunderbolt/2.png");
    lightning3 = loadImage("images/thunderbolt/3.png");
    lightning4 = loadImage("images/thunderbolt/4.png");

    
}

function setup(){
    createCanvas(500,700);

    engine = Engine.create();
    world = engine.world;


    unbrella = new Umbrella(200,500);


    for(var i = 0; i < maxDrops; i++){ 
        drops.push(new createDrops(random(0,500) , random(0,500)));
    }
}


function draw(){
    Engine.update(engine);

//applying a colour to the background

    background(53,79,136);


    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){ 
        thunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370) , random(10,30) , 10 , 10);
        switch(rand){ 
            case 1 : Thunder.addImage(lightning1);
            break;
            case 2 : Thunder.addImage(lightning2);
            break;
            case 3 : Thunder.addImage(lightning3);
            break;
            case 4 : Thunder.addImage(lightning4);
            break;
            default: break;
        }
        Thunder.scale = 0.7;
    }
    
    if(ThunderCreatedFrame + 10 === frameCount && Thunder){ 
        Thunder.destroy();
    }
    umbrella.display();

    for(var i = 0; i < maxDrops; i++){ 
        drops[i].display();
        drops[i].update();

    }

    drawSprites();
    
}   

