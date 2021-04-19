console.log("Welcome to Conditional Demo");

let age = 4;

if (age >= 18) {
    console.log('Eligible for getting Driving Licence');

}
else {
    console.log('Age is less than 18 please wait !!');
    
}

let num1 = 10, num2 = 20, num3 = 30;

if(num1> num2 && num1 > num3)
{
    console.log("Greater of 3 numbers is " + num1);
    
}
else if(num2> num3 && num2 > num1)
{
    console.log("Greater of 3 numbers is " + num2);
}
else{
    console.log("Greater of 3 numbers is " + num3);
    
}