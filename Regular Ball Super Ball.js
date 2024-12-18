/*
Description:
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/
// var Ball = function(ballType) {
//     return ballType
//   };
class Ball {
  constructor(ballType) {
    this.ballType = ballType || 'regular';
  }
}
////////////////////////////////////////!SECTION
// class Ball {
//   constructor(ballType = 'regular') {
//     this.ballType = ballType;
//   }
// }
////////////////////////////////////////!SECTION
// class Ball {
//   constructor(type = `regular`) {
//     this._type = type;
//   }

//   get ballType() {
//     return this._type;
//   }
// }
////////////////////////////////////////!SECTION
// class Ball {
//   constructor(type = 'regular') {
//     this.ballType = type;
//   }
// }

console.log(new Ball().ballType); //"regular"
console.log(new Ball('super').ballType); //"super"
