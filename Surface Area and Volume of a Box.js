/*
Description:

Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/
function getSize(width, height, depth) {
  return [
    (width * depth + height * depth + width * height) * 2,
    width * height * depth,
  ];
}

console.log(getSize(4, 2, 6)); //[88, 48]
console.log(getSize(10, 10, 10)); //[600, 1000]
console.log(getSize(4, 2, 6)[0]); //88
console.log(getSize(4, 2, 6)[1]); //48
