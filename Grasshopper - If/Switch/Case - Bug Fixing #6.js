/*
Description:
Switch/Case - Bug Fixing #6

Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
 */
function evalObject(value) {
  let result = 0;
  switch (value.operation) {
    case "+":
      result = value.a + value.b;
      break;
    case "-":
      result = value.a - value.b;
      break;
    case "/":
      result = value.a / value.b;
      break;
    case "*":
      result = value.a * value.b;
      break;
    case "%":
      result = value.a % value.b;
      break;
    case "^":
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;

  //   const operations = {
  //     "+": value.a + value.b,
  //     "-": value.a - value.b,
  //     "/": value.a / value.b,
  //     "*": value.a * value.b,
  //     "%": value.a % value.b,
  //     "^": Math.pow(value.a, value.b),
  //   };

  //   return operations[value.operation];
}

// const evalObject = value => ({
//     '+': v => v.a + v.b,
//     '-': v => v.a - v.b,
//     '/': v => v.a / v.b,
//     '*': v => v.a * v.b,
//     '%': v => v.a % v.b,
//     '^': v => Math.pow(v.a, v.b)
// }[value.operation](value))

console.log(
  evalObject({ a: 1, b: 1, operation: "+" }),
  2,
  "Return the evaluated string as a number!"
);
console.log(
  evalObject({ a: 1, b: 1, operation: "-" }),
  0,
  "Return the evaluated string as a number!"
);
console.log(
  evalObject({ a: 1, b: 1, operation: "/" }),
  1,
  "Return the evaluated string as a number!"
);
console.log(
  evalObject({ a: 1, b: 1, operation: "*" }),
  1,
  "Return the evaluated string as a number!"
);
console.log(
  evalObject({ a: 1, b: 1, operation: "%" }),
  0,
  "Return the evaluated string as a number!"
);
console.log(
  evalObject({ a: 1, b: 1, operation: "^" }),
  1,
  "Return the evaluated string as a number!"
);
