class Ground {


    constructor(){


        var option = {
            isStatic:true,
            friction:0.4
        }

        this.body = Bodies.rectangle(500,625,1200,20,option);
        World.add(world,this.body);
    }

    display(){
        push();
        rectMode(CENTER);
        fill("silver");
        rect(500,625,1200,20);
        pop();
    }
}