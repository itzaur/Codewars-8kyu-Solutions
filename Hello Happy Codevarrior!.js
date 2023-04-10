/*
DESCRIPTION:
VVhat ?!?

None of zese codevarriors seemz to remember hiz ovvn name !

Kould you help ?

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..
*/
class Warrior {
  constructor(n) {
    this.n = n;
  }

  name(value) {
    return value ? (this.n = value) : this.n;

    // this.n = value || this.n;
    // return this.n;
  }

  // name(n = this.n){
  //   return this.n = n
  // }
}

Warrior.prototype.toString = function () {
  return "Hi! my name's " + this.name();
};

var albert = new Warrior("Albert");
var boris = new Warrior("Boris");

console.log(albert.name("ghfgh"));
console.log(albert.toString());
console.log(albert.name());

//   Warrior.prototype.toString = function(){
//       return "Hi! my name's "+this.name();
//   }

console.log(albert.toString()); //"Hi! my name's Albert"
console.log(albert.name()); //"Albert"
console.log(boris.name()); //"Boris"

boris.name("Bobo");
console.log(boris.name()); //"Bobo"
