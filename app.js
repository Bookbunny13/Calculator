//learning javascript
//java script is used to interact with the program
//a comment is a human read explanation that is added to source code to make it easier to understand comments by the compiler and interpreter and do not affect the programs execution
//a variable is a space in memory
//Variables in javascript are declared using the key words let and const
//A function is a block of code that can be used to achieve a specific purpose i.e counting 1-10
let name="Angel"
// console.log(name)
// const num1=1451
// const num2=387
// let result=num1+num2
// console.log(result)
// console.error(result)
//writing functions in javascript

/*
1. variable rules
2. a variable can't be a number
3. a variable can only be declared using let and const
4. a variable cannot be a special character in javascript
5. a variable is case sensitive
6. a variable cannot have spaces i.e "first name" can be "firstName"/"first_name"
*/
//function that runs when button is clicked
// This function runs when a button is clicked
function calculate(operation) {
  // Get the numbers from the inputs
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  // Check if the inputs are numbers
  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter numbers!";
  } else {
    // Do the math based on the operation
    if (operation === '+') {
      result = num1 + num2;
    } else if (operation === '-') {
      result = num1 - num2;
    } else if (operation === '*') {
      result = num1 * num2;
    } else if (operation === '/') {
      if (num2 === 0) {
        result = "Cannot divide by zero!";
      } else {
        result = num1 / num2;
      }
    }
  }

  // Show the result on the page
  document.getElementById('result').textContent = "Result: " + result;
}