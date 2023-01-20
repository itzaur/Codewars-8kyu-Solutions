/*
Description:

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
Examples

mango(2, 3) ==> 6    # 2 mangoes for 3 = 6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for 3 = 12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
*/
// function mango(quantity, price, count = 2) {
//   let possibleMangoes = [];

//   do {
//     possibleMangoes.push(count);
//     count += 2;
//   } while (count < quantity - (possibleMangoes.length - 1));

//   const lastMangoeNumber = +possibleMangoes.slice(-1).join``;

//   const mangoes = lastMangoeNumber + possibleMangoes.length;

//   return mangoes >= quantity
//     ? lastMangoeNumber * price
//     : (lastMangoeNumber + 1) * price;
// }

function mango(quantity, price) {
  return (quantity - Math.floor(quantity / 3)) * price;

  // let count = 0;

  // for (let i = 0; i <= quantity; i++) {
  //   if (i % 3 !== 0) {
  //     count += price;
  //   }
  // }

  // return count;

  // return Math.ceil((quantity / 3) * 2) * price;
}

console.log(mango(8, 67)); //402
console.log(mango(2, 3)); //6
console.log(mango(3, 3)); //6
console.log(mango(5, 3)); //12
console.log(mango(9, 5)); //30
console.log(mango(10, 19)); //133
console.log(mango(4, 48)); //144

console.log(mango(22, 1)); //15
console.log(mango(24, 70)); //1120
console.log(mango(18, 58)); //696
console.log(mango(13, 86)); //774
