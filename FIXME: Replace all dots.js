/*
Description:

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.
Task

Fix the bug so we can all go home early.
Notes

String str will never be null.
*/
var replaceDots = function (str) {
  return str.split`.`.join`-`;

  // return str.replace(/\./g, '-');
  // return str.replace(/[.]/g, '-');

  // return [...str].map(el => el === "." ? "-" : el).join``;
  // return [...str].map(el => el.replace(".", "-")).join``

  //   return str === (str = str.replace(".", "-")) ? str : replaceDots(str);
};

console.log(replaceDots("one.two.three")); //"one-two-three"
