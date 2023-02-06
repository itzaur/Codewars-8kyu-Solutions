/*
Description:

Terminal Game - Create Hero Prototype

In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
attribute 	value
name 	user argument or 'Hero'
position 	'00'
health 	100
damage 	5
experience 	0
*/
function Hero(name = "Hero") {
  this.name = name;
  this.experience = 0;
  this.health = 100;
  this.position = "00";
  this.damage = 5;
}

let myHero = new Hero();
console.log(myHero.name); //"Hero"
console.log(myHero.experience); //0
console.log(myHero.health); //100
console.log(myHero.position); //"00"
console.log(myHero.damage); //5
console.log(new Hero("Greg").name); //'Greg'
