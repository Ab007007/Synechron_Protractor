console.log(this);
export var person = {
    born:1980,
    printYearofBorn: function() {
        console.log(this);
        console.log(this.born);    
    }
}

const person2 = {
    born: 1990
}
person.printYearofBorn();
person2.printYearofBorn = person.printYearofBorn;
person2.printYearofBorn();