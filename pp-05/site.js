//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:

var x = 5;

function double(num) {
  var x = num * 2;
  return x;
}

double(6);
console.log('The value of x is:', x, 'It should be 5.');

//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object,
//  like `window.x`):


//  3. Correct this function so that there is no i variable in
//  the global scope:

function arrayEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red','green','blue'], console.log);

console.log(i) // should be 'undefined', not 3

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above

// Upon calling the function addTwo(x), we pass a value for x which is 4.
// What happens is that instead of addTwo(x) using the value of the global
// variable (5), it uses the value passed onto it (4). This acts as a variable
// declaration, thereby treating x (4) as a local variable. We should remember
// that variable declarations found inside a dedicated block will be treated as
// local variables, otherwise, it will be treated as a global variable
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
// Statements/var). If we removed the parameters from function addTwo(x), then
// it would use the global variable x (5) and would change its value to 7.
