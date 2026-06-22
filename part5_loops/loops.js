//while
//do while
//for
//for/in
//for/of
//for/each

/*
1.write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in avariable named `sum`.
*/

let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
//console.log(sum);

/*
2.while 5-1 stores num in array called `countdown`.
*/
const countdown = [];
let num = 5;
while (num >= 1) {
  countdown.push(num);
  num--;
}
//console.log(countdown);

/*
do while loop that prompts a user to enter thier fav tea and they eneter stop to add and store each tea in into `teaCollection`.
*/
const prompt = require("prompt-sync")();
const teaCollection = [];
let tea;
//do{

// tea = prompt("enter fav tea(type 'stop'to finish ): ");
//if (tea!== "stop"){
teaCollection.push(tea);
//}
//} while(tea !=="stop");
//console.log(teaCollection);

/*
Write a do while loop that adds 1 to 3 and stores variable named total

*/
let total=0;
let num1 = 1;
do {
  total += num1;
  num1++
} while (num1<= 3);
//console.log(total);
/*
for loop that nultiples each element in the array '[2,4,6]' by 2 stores results in a new array multinums
*/
let multinums = []
let numss = [2,4,6];
for (let index = 0; index < numss.length; index++) {
//   takenum = numss[index]*2;
//   multinums.push(takenum)

multinums.push(numss[index]*2)
}
//console.log(multinums);
/*
6. Write a `for' loop that lists all the cities in the
array `["Paris", "New York", "Tokyo", "London" ]' and
stores each city in a new array named `cityList'.
*/
let list = ["Paris", "New York", "Tokyo", "London"];
citylist = [];
for (let l = 0; l < list.length; l++) {
 let myci = list[l]
 citylist.push(myci)
}
console.log(citylist);
