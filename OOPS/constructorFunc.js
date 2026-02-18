function person (name, age){
    this.name = name
    this.age = age
}
function car(make,model){
    this.make = make
    this.model = model
    //this --> new always points 
    //we always acess this using new and this
}

let mycar = new car("toyota","camry");
console.log(mycar);

let mynewcar = new car("tata","safari");
console.log(mynewcar);

// uSE OF NEW IS MUST 
function tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

// let lemontea = new tea("lemon tea")
// console.log (lemontea.describe());

function animal(species){
    this.species = species
}
animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}
let dog = new animal ("dog")
console.log(dog.sound());

let cat = new animal("cat");
console.log(cat.sound());

function Drink (name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink ("coffee");
