console.log("Welcome to Looping Demo");

let fruits = ['Apple', 'Orange', 'Mango']

function printArray(el)
{
    for (let index = 0; index < el.length; index++)
    {
       console.log("Fruit at index " + index + " is : " + el[index]);
       
   }
}

printArray(fruits)

console.log("--Inserting element using push --");
fruits.push('jack fruit');
printArray(fruits)

console.log("--Delete element using push --");
fruits.pop();
printArray(fruits)