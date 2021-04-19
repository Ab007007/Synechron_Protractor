console.log("Welcome to Looping Demo");

let fruits = ['Apple', 'Orange', 'Mango']

printUsingForIn();


printUsingForof();

function printUsingForof() {
    console.log('--- Printing elements using for of --');
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

function printUsingForIn() {
    console.log('--- Printing elements using for in --');
       for (const i in fruits) {
        console.log(fruits[i]);
    }
}
