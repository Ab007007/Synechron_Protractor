function add() {
    return 10 +20;
    
}

function add1(a, b) {
    return a +b;
    
}
console.log(add());
console.log(add1(11,2));

//function declaration
function calcAge(birthYear)
{
    return 2021 - birthYear;
}
const age1 = calcAge(1984);
console.log(age1);

// function expression
const calAge2 = function(birthYear) {
    return 2021 - birthYear;
}

const age2 = calAge2(1980);
console.log(age2);
// Arrow Function
const calAge3 = birthYear =>  2021 - birthYear;
const retairmentAge = birthYear => {
    const age = 2021 - birthYear;
    const retairment = 60 - age;
    console.log("Ret " + retairment);
    
    return retairment;
} 
//const age3 = calAge3(1984);
console.log(`S{calAge3(1984)}`);

//const ret = retairmentAge(1980)
console.log("Retairment age " + retairmentAge(1980));



