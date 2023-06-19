/*
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
*/
let name = 'Abe';
function greet_abe() {
  return `Hello, ${name}!`;
}

function greet_ben() {
  name = 'Ben';
  return `Hello, ${name}!`;
}

console.log(greet_abe()); //'Hello, Abe!'
console.log(greet_ben()); //'Hello, Ben!'
