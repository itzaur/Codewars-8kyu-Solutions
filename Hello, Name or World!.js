/*
Description:

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/
function hello(name) {
  return `Hello, ${
    name ? name.at().toUpperCase() + name.toLowerCase().slice(1) : "World"
  }!`;
}

console.log(hello("johN")); //'Hello, John!'
console.log(hello("alice")); //'Hello, Alice!'
console.log(hello()); //'Hello, World!'
console.log(hello("")); //'Hello, World!'
