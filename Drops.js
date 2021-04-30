// creating a class for the Drops

class Drops{ 
    constructor(x,y,radius){ 
        var options = { 
            'restitution' : 0,                                                                                                       
            'friction' : 0.01
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world , this.body);
        
    }

    update(){ 
        if(this.body.position.y > height){ 
        Matter.Body.setPosition(this,body,{x:random(0,50),y:random(0,650)});
    }
}
display(){ 
    noStroke();
    fill(0,0,255);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x , this.body.position.y , this.radius , this.radius);
}
    


}
