/*
Description:

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/
function litres(time) {
  return Math.floor(time / 2);
  // return ~~(time / 2)
  // return time / 2 | 0
  // return Math.trunc(time / 2);
  // return time >> 1
}

console.log(litres(2)); //1
console.log(litres(1.4)); //0
console.log(litres(12.3)); //6
console.log(litres(0.82)); //0
console.log(litres(11.8)); //5
console.log(litres(1787)); //893
console.log(litres(0)); //0
