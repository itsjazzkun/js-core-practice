// --- TOPIC: ARRAY METHODS ---

// Task 1: Square Numbers (Using map)
const squareNumbers = (arr) => arr.map((num) => num * num);

// Task 2: Custom Filter Function (Using filter)
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

// Task 3: Sum of Positive Numbers (Chaining filter & reduce)
const sumPositiveNumbers = (arr) =>
  arr.filter((n) => n > 0).reduce((a, b) => a + b, 0);

// Task 4: Transform Array of Objects (Extracting names)
const getNames = (arr) => arr.map((obj) => obj.name);

// Task 5: Find the Longest Word (Using reduce & ternary operator)
const findLongestWord = (arr) =>
  arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );

// --- TOPIC: NESTED FUNCTIONS & CONTEXT ---

// Task 1: Using 'this' in Objects (Must use standard function, NO arrows)
const person = {
  name: "Hitesh",
  age: 19.5,
  introduce: function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  },
};

// Task 2: Function within a function
function outer() {
  function inner() {
    return "Inner function called";
  }
  return inner();
}
