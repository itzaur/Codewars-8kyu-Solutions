/*
Description:
In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents
*/
function fuelPrice(litres, pricePerLitre) {
  switch (true) {
    case litres >= 10:
      return +(litres * pricePerLitre - litres * 0.25).toFixed(2);
    case litres >= 8:
      return +(litres * pricePerLitre - litres * 0.2).toFixed(2);
    case litres >= 6:
      return +(litres * pricePerLitre - litres * 0.15).toFixed(2);
    case litres >= 4:
      return +(litres * pricePerLitre - litres * 0.1).toFixed(2);
    case litres >= 2:
      return +(litres * pricePerLitre - litres * 0.05).toFixed(2);
    default:
      return +(litres * pricePerLitre).toFixed(2);
  }
  //////////////////////////////////////////!SECTION
  //   var discount = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
  //   var price = litres * (pricePerLitre - discount);

  //   return Math.round(price * 100) / 100;
}

console.log(fuelPrice(5, 1.23)); //5.65
console.log(fuelPrice(8, 2.5)); //18.4
console.log(fuelPrice(5, 5.6)); //27.5
