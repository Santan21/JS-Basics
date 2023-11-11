//EXPERIMENTING FIRST-CLASS FUNCTIONS

//Assigning a function to a variable
const foo = () => {
    console.log('foo');
}
foo();
//invoking the function

//returning a function
//  we are returning a function from another function 
//- We can return a function because functions in JavaScript are treated as values.
 function sayHello() {
  return () => {
    console.log('Hello');
  }
 };
