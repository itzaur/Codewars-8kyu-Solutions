/*
Description:

Hey Codewarrior!

You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

The constructor taking no arguments should assign 0 to Cube's Side property.

*/
class Cube {
  constructor(number = 0) {
    this.number = Math.abs(number);
  }

  getSide() {
    return this.number;
  }

  setSide(newNumber) {
    this.number = Math.abs(newNumber);
  }
}

// class Cube {
//   constructor(side = 0) { this.side = side; }
//   getSide() { return Math.abs(this.side); }
//   setSide(side) { this.side = side; }
// };

// class Cube {
//   constructor(n = 0) {
//     this.setSide(n);
//   }
//   getSide() {
//     return this.side;
//   }
//   setSide(n) {
//     this.side = Math.abs(n);
//   }
// }
