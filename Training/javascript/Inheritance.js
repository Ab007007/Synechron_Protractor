class Car 
{
    startEngine() {
        console.log('Starts the engine');
        
    }

    stopEngine() {
        console.log('Stop the engine');
        
    }
}

class Tyota extends Car 
{
    carType() {
        console.log("laxury");
        
    }
}

class Innova extends Tyota
{
    seater() {
        console.log('8 Seater' );
        
    }
}

class KIA extends Car 
{
    carType() {
        console.log("laxury with new models");
        
    }
}

let innova = new Innova();
innova.startEngine()
innova.seater();
innova.carType();
innova.stopEngine();
