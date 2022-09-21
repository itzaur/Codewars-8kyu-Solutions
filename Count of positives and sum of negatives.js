/*
Description:

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return [];
  const countOfPositivesNumbers = input.filter((el) => el > 0).length;
  const sumOfNegativeNumbers = input.filter((el) => el < 0);
  let sum;

  if (sumOfNegativeNumbers) {
    sum = sumOfNegativeNumbers.reduce((acc, el) => {
      return acc + el;
    }, 0);
  }

  return [countOfPositivesNumbers, sum];

  //   return input && input.length
  //     ? [
  //         input.filter((el) => el > 0).length,
  //         input.filter((el) => el < 0).reduce((acc, el) => acc + el, 0),
  //       ]
  //     : [];

  // return input && input.length
  // ? [
  //     input.filter((el) => el > 0).length,
  //     input.reduce((acc, el) => acc < 0 ? acc + el : acc, 0),
  //   ]
  // : [];
}

console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5]));
