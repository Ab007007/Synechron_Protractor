console.log("Welcome to Array");

const persondDetails = [
'Aravinda', 
'HB', 
35, 
'Trainer',
['aru', 'hary', 'gopi']

];

const pDetails = {
    firstName: 'Aravinda', 
    lastName: 'HB', 
    age: 35, 
    occupation: 'Trainer',
    friends: ['aru', 'hary', 'gopi']
    
};

console.log(pDetails.firstName);
console.log(pDetails.lastName);

const nameKey = 'Name';

console.log(pDetails['first' + nameKey]);
console.log(pDetails['last' + nameKey]);

