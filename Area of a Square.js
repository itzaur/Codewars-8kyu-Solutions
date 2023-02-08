/*
Description:

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/
function squareArea(A) {
  return +Math.pow(A / (2 * Math.PI * (90 / 360)), 2).toFixed(2);
}

console.log(squareArea(2), 1.62, 1e-2); //1.62
console.log(squareArea(0), 0, 1e-2); //0
console.log(squareArea(14.05), 80, 1e-2); //80
