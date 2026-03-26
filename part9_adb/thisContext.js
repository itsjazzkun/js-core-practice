const person = {
    name: "Jai",
    greet(){
        console.log(`hi. i am ${this.name}`);
        
    },
};
person.greet();

const greetFunction = person.greet
greetFunction()


const boundgreet = person.greet.bind ({name : "jazz"});
boundgreet();

const perso = {
    name: "Jai",
    greet(age, city){
        console.log(`hi. i am ${this.name}, ${age}, from ${city}`);
    },
};

// call - args passed individually
perso.greet.call({name: "Jazz"}, 20, "Delhi");

// apply - args passed as array
perso.greet.apply({name: "Jazz"}, [20, "Delhi"]);


