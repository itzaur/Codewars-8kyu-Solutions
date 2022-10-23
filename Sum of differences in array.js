/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/
function sumOfDifferences(arr) {
  return arr.length > 1
    ? arr
        .sort((a, b) => b - a)
        .reduce((acc, _, i, array) => {
          return [...acc, array[i] - array[i + 1]].splice(0, array.length - 1);
        }, [])
        .reduce((acc, el) => acc + el)
    : 0;

  // return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
  // return 0 in arr ? Math.max(...arr) - Math.min(...arr) : 0
  // return arr.length && Math.max(...arr) - Math.min(...arr)

  // return arr.sort((a, b) => b - a).map((el, i) => el - arr[i + 1] || 0).reduce((acc, item) => acc + item, 0)

  // return arr.sort((a, b) => b - a).shift() - arr.pop() || 0

  // return arr
  //   .sort((a, b) => b - a)
  //   .reduce((acc, el, i, array) => {
  //     if(array.length - 1 > i) {
  //       acc += el - array[i + 1]
  //     }
  //     return acc;
  //   }, 0);

  // const sortArr = arr.sort((a, b) => b - a);
  // return arr.length ? sortArr[0] - sortArr[sortArr.length - 1] : 0
}

console.log(sumOfDifferences([1, 2, 10])); //9
console.log(sumOfDifferences([-3, -2, -1])); //2
console.log(sumOfDifferences([])); //0
console.log(sumOfDifferences([0])); //0
