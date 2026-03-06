let car = {
  make: "toyota",
  model: "camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
//console.log(car.start());

function person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new person("John", 20);
//console.log(john.name);

function animal(type) {
  this.type = type;
}
animal.prototype.speak = function () {
  return `${this.type}makes a sound`;
};
//Array.prototype.jazz = function () {
  // return `custom method ${this}`;
//};

let myArray = [1, 2, 3];
console.log(myArray.jazz());
let myNewArray = [1, 2, 3, 4, 5, 6];
//console.log(myNewArray.jazz());

class Vechicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car form ${this.make}`;
  }
}

class Car extends Vechicle {
  drive() {
    return `${this.make}: This is an inhertiance example`;
  }
}

let myCar = new Car("toyota", "corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation
class BankACC {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getbalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankACC();
//console.log(account.getbalance());

//Abstaction

class cofeemachine {
  start() {
    //call db
    //filter call
    return `starting the machine...`;
  }
  brewcofee() {
    return `brewing cofee`;
  }
  pressStartBtn() {
    let msg1 = this.start();
    let msg2 = this.brewcofee();
    return `${msg1} + ${msg2}`;
  }
}
let mymachine = new cofeemachine();
//console.log(mymachine.pressStartBtn());

//Polymorphism

class bird {
  fly() {
    return `flying....`;
  }
}

class penguin extends bird {
  fly() {
    return `penguin can't fly`;
  }
}

let Bird = new bird();
let Penguin = new penguin();
// console.log(Bird.fly());
// console.log(Penguin.fly());

//STATIC medthod

class Calculator {
  static add(a, b) {
    return a + b;
  }
}
// let minicalc = new Calculator();
// console.log(minicalc.add(2,3));

//console.log(Calculator.add(2,3));

// getters and setters

class employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary;
  }

 get salary(){
    return `you are not allowed to see the salary`;
}
set salray (value){
    if(value<0){
        console.error("invaild salary")
    }else{
        this._salary = salray;
    }
}
}
