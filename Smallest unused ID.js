/*
DESCRIPTION:
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/
function nextId(ids) {
  const result = ids.sort((a, b) => a - b);

  let arr = [];

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i + 1] - result[i] > 1) {
      arr.push(result[i]);
      break;
    }
  }

  if (!result.includes(0)) return 0;

  return arr.length ? arr.at(-1) + 1 : result.at(-1) + 1;

  ///////////////////////
  // let count = 0;
  // while (ids.includes(count)) {
  //   count++;
  // }
  // return count;

  //////////////////////
  // for (let i = 0; i < ids.length; i++) {
  //   console.log(ids.indexOf(i));
  //   if (ids.indexOf(i) == -1) return i;
  // }

  // return ids.length;
}

console.log(nextId([8, 8, 4, 9, 2, 9, 7, 7])); //0
console.log(nextId([3, 2, 4, 5, 1, 4, 2, 7])); //0
console.log(nextId([1, 6, 3, 9, 4, 1, 0, 6])); //2
console.log(nextId([4, 1, 8, 0, 2, 1, 7, 3])); //5
console.log(nextId([0, 1, 2, 3, 5])); //4
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //11
console.log(nextId([1, 2, 0, 2, 3, 5])); //4
console.log(nextId([3, 8, 5, 2, 4, 3, 3, 4])); //0
console.log(nextId([1, 2, 0, 2, 3])); //4
