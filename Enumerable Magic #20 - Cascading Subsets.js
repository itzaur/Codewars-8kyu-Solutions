/*
Description:
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]

As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/
function eachCons(array, n) {
  const result = [];

  for (let i = 0; i <= array.length - n; i++) {
    result.push(array.slice(i, i + n));
  }

  return result;
  //////////////////////////////////////////!SECTION
  //   return array
  //     .map((_, i) => array.slice(i, i + n))
  //     .filter((el) => el.length == n);
  //////////////////////////////////////////!SECTION
  //   return array.reduce(
  //     (acc, _, index) =>
  //       index + n <= array.length
  //         ? [...acc, array.slice(index, index + n)]
  //         : [...acc],
  //     []
  //   );
}

const lst = [3, 5, 8, 13];

console.log(eachCons(lst, 1)); //[[3], [5], [8], [13]]
console.log(eachCons(lst, 2)); //[[3, 5],[5, 8],[8, 13]]
console.log(eachCons(lst, 3)); //[[3, 5, 8],[5, 8, 13]]
console.log(eachCons([], 3)); //[]
