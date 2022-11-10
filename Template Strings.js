/*
Description:
Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```

Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
 */
const templeStrings = function (obj, feature) {
  let arr = [obj, feature];
  arr.splice(1, 0, "are");
  return arr.join` `;

  //   return obj + " are " + feature;

  //   return `${obj} are ${feature}`;

  //   return [obj, feature].join` are `;

  //   return obj.concat(" are ").concat(feature);
};

console.log(templeStrings("Animals", "Good")); //'Animals are Good'
