/*
Description:

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/
function booleanToString(b) {
  return "" + b;

  // return b.toString();

  // return String(b);

  // return `${b}`;

  // return JSON.stringify(b);
}

console.log(booleanToString(true)); //"true"
console.log(booleanToString(false)); //"false"
