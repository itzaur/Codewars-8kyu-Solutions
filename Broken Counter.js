/*
Description:

Our counter prototype is broken. Can you spot, what's wrong here?
*/
function Counter() {
  this.value = 0;
}

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.increase = function () {
  return this.value++;
};

Counter.prototype.reset = function () {
  return (this.value = 0);
};

// class Counter {
//     constructor(value) {
//       this.value = 0;
//     }

//     getValue() {
//       return this.value;
//     }

//     increase() {
//       return this.value++;
//     }

//     reset() {
//       return (this.value = 0);
//     }
//   }

console.log(new Counter(0).getValue());
console.log(new Counter(2).increase());
console.log(new Counter(2).reset());
