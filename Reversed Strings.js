/*
Description:

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
 */

const solution = (str) => [...str].reverse().join``;
// const solution = (str) => str.split``.reverse().join``

// const solution = (str) => str.split``.reduceRight((after, before) => after += before, '');

// const solution = (str) => str.split``.reduce((acc, item) => item + acc, '')

console.log(solution("world")); //'dlrow'
console.log(solution("hello")); //'olleh'
console.log(solution("")); //''
console.log(solution("h")); //'h'
