class Animal {
    constructor(name)
    {
        this.name = name;
    }


    eat() {
        console.log("Animal eat food!!!");
        
    }
}

class Lion extends Animal {
    eat(){
        console.log("LION - Eat Meat in the Forest");
        
    }
}

class Cow extends Animal {
    eat(){
        console.log("COW - Eat Grass only");
        
    }
}


let cow = new Cow('Cow');
cow.eat();
let lion = new Lion('Lion');
lion.eat();