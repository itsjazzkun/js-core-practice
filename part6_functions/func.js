/*
1. Write a function named `makeTea' that takes one
parameter, `type0fTea', and returns a string like
'"Making green tea"' when called with '"green tea"'.
Store the result in a variable named `teaOrder'.
*/
function makeTea (type0fTea){
    return `making ${type0fTea}`;
    console.log(ts);   
}
let teaOrder = makeTea("lemon tea");
//console.log(teaOrder);
/*
2. Create a function named `orderTea' that takes one
parameter, `teaType'. Inside this function, create
another function named `confirmOrder' that returns a
message like '"Order confirmed for chai"'.
Call 'confirmOrder' from within `orderTea' and return the
result.
*/
function orderTea(teaType){
    function confirmOrder(){
        return `Order Confrimed for chai`;
    }
    return confirmOrder();
}

let orderconf = orderTea("chai");
//console.log(orderconf);

/*
3. Write an arrow function named `calculateTotal' that
takes two parameters: `price' and `quantity'. The
function should return the total cost by multiplying the
`price' and `quantity'.
Store the result in a variable named `totalCost'.
*/

const calculateTotal = (price , quantity) => {
  return price * quantity
}


let totalCost = calculateTotal(499* 100)

/*
4. Write a function named `processTeaOrder' that takes
another function, `makeTea', as a parameter and calls it
with the argument '"earl grey"'.
Return the result of calling `makeTea'.
*/
function makeTea(type0fTea){
    return `maketea : ${type0fTea}`
}
function processTeaOrder(teafu){
 return teafu("earl grey")
}
let order = processTeaOrder (makeTea);
//console.log (order)

/*
5. Write a function named `createTeaMaker' that returns
another function. The returned function should take one
parameter, 'teaType', and return a message like '"Making
green tea"'.
Store the returned function in a variable named
`teaMaker' and call it with '"green tea"'.
*/

function createTeaMaker (name){
    return function (teaType){
        return `Making ${teaType} ${name}`;
    };
}
let teaMaker = createTeaMaker("jazz");
let result = teaMaker("chai")
console.log(result);


/*
Playing with Types
Task 1:
Write a function stringToNumber that takes a string input and tries to convert it to a number.
 If the conversion fails, return "Not a number".
 
Task 2:
Write a function flipBoolean that takes any input and converts it to its boolean equivalent,
 then flips it. For example, true becomes false, 0 becomes true, etc.

Task 3:
Write a function whatAmI that takes an input and returns a string describing its type after conversion. 
If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

Task 4:
Write a function isItTruthy that takes an input and returns "It's truthy!"
 if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/

function stringToNumber(input) {
  const value = Number(input);
  if (isNaN(value)) {
    return "Not a number";
  }
  return value;
}

function flipBoolean(input) {
  return !input;
}

function whatAmI(input) {
  if (typeof input === "number") {
    return "I'm a number!";
  }
  if (typeof input === "string") {
    return "I'm a string!";
  }
}

function isItTruthy(input) {
  if (input) {
    return "It's truthy!";
  } else {
    return "It's falsey!";
  }
}
