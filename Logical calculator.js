/*
Description:
Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).
*/
function logicalCalc(array, op) {
  switch (op) {
    case 'AND':
      return array.reduce((acc, el) => acc && el);
    case 'OR':
      return array.reduce((acc, el) => acc || el);
    default:
      return array.reduce((acc, el) => acc !== el);
  }
  //////////////////////////////////////!SECTION
  //   var ops = {
  //     AND: (a, b) => a && b,
  //     OR: (a, b) => a || b,
  //     XOR: (a, b) => a !== b,
  //   };

  //   return array.reduce(ops[op]);
  //////////////////////////////////////!SECTION
  //   return op === `AND`
  //     ? array.every(Boolean)
  //     : op === `OR`
  //     ? array.some(Boolean)
  //     : !!(array.filter(Boolean).length & 1);
}

console.log(logicalCalc([true, true, true, false], 'AND')); //false
console.log(logicalCalc([true, true, true, false], 'OR')); //true
console.log(logicalCalc([true, true, true, false], 'XOR')); //true
console.log(logicalCalc([true, true, false, false], 'AND')); //false
console.log(logicalCalc([true, true, false, false], 'OR')); //true
console.log(logicalCalc([true, true, false, false], 'XOR')); //false
console.log(logicalCalc([true, false, false, false], 'AND')); //false
console.log(logicalCalc([true, false, false, false], 'OR')); //true
console.log(logicalCalc([true, false, false, false], 'XOR')); //true
console.log(logicalCalc([true, true], 'AND')); //true
console.log(logicalCalc([true, true], 'OR')); //true
console.log(logicalCalc([true, true], 'XOR')); //false
console.log(logicalCalc([false, false], 'AND')); //false
console.log(logicalCalc([false, false], 'OR')); //false
console.log(logicalCalc([false, false], 'XOR')); //false
console.log(logicalCalc([false], 'AND')); //false
console.log(logicalCalc([false], 'OR')); //false
console.log(logicalCalc([false], 'XOR')); //false
console.log(logicalCalc([true], 'AND')); //true
console.log(logicalCalc([true], 'OR')); //true
console.log(logicalCalc([true], 'XOR')); //true
