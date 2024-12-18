/*
Description:
What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

The usage will be quite simple, like:

[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

More info can be found here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
Array.prototype.filter = function (func) {
  return this.reduce((acc, item) => {
    return func(item) ? [...acc, item] : acc;
  }, []);
  //////////////////////////////////!SECTION
  //   const newArray = [];

  //   for (i of this) if (func(i)) newArray.push(i);

  //   return newArray;
};

console.log(
  [1, 2, 3, 4].filter((num) => {
    return num > 3;
  })
); //[4]
