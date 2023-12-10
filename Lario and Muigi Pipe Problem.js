/*
DESCRIPTION:
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous one.

Task
Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/
function pipeFix(numbers) {
  let { 0: first, length: l, [l - 1]: last } = numbers;
  let result = [];

  while (first <= last) {
    result.push(first);
    first++;
  }

  return result;

  //   return Array.from(
  //     { length: numbers.pop() - numbers[0] + 1 },
  //     (_, i) => i + numbers[0]
  //   );
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(pipeFix([1, 2, 3, 12])); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(pipeFix([6, 9])); //[6, 7, 8, 9]
console.log(pipeFix([-1, 4])); //[-1, 0, 1, 2, 3, 4]
console.log(pipeFix([1, 2, 3])); //[1, 2, 3]
