 //experimenting variables
let myVariable = 'Leslie';
console.log(myVariable);

//experimenting data types that can be stored in variables
let newVariable = [1, 10, 'Bob', 'Jessie']
let nextVariable = true;
let firstVariable = document.querySelectorAll('h1')
let secondVariable = 'Leslie';

//addition of two numbers
let thirdVariable = 6 + 9;
console.log(thirdVariable);

let fourthVariable = 'Hello' + 'world';
console.log(fourthVariable);

//testing strict equality between variables
letfifthVariable = 4
fifthVariable == 3
// this will return a boolean (false) result. 
// == tests if too data types or values are equal and returns a boolean

let sixthVariable = 9
!(sixthVariable) === 9
// this will return a boolean (false) result. ! means "not", 
// this makes it a a false statement as the values of the variables are equal

letseventhVariable = 9
seventhVariable !== 9
//this will return a boolean (false) result.  
// ! means "not", and since the values of the variables are same, 'false' is returned

//conditionals in JS
let iceCream = 'pinkberry'
if (iceCream === 'pinkberry') {
    alert ('Yes! this is it');
}
else { 
    alert ('No! this is not it');
}
//The expression inside the if () is the test. This uses the strict equality operator (as described above) to compare the variable iceCream with the string chocolate to see if the two are equal. 
//If this comparison returns true, the first block of code runs. 
//If the comparison is not true, the second block of code—after the else statement—runs instead.


//functions in JS
//functions usually look like a variable and have parentheses in front of it.
letmyVariable = document.querySelector('h1');
alert('Hello');

//creating functions with arguments
function myFunction(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}

myFunction(1, 2, 3);

//example here
function multiply(a1, a3) {
    let result = a1 + a3;
    return result;
}