class Employee {

    constructor(name, id)
    {
        this.name = name;
        this.id = id;
    }
}

let emp1 = new Employee('Aravinda', 'ID-001');
let emp2 = new Employee('Mahesh', 'ID-002');

console.log(emp1.name + " and " + emp1.id);
console.log(emp2.name + " and " + emp2.id);

