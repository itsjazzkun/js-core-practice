/* declaring an array and store the first element of that 
array as first element
*/
let teaflavours = ["green tea", "black tea", "oolong tea"];

//another way to define array
//let tfla = new Array("green tea", "black tea", "oolong tea");

let firstTea = teaflavours[0];
if (firstTea === "green tea") {
  //console.log(true);
}

/*
delcare cities nd 3rd city as fav city in new array
*/
let cities = ["paris", "delhi", "tokyo", "newyork"];
let FavCiti = cities[2];
if (FavCiti === "tokyo") {
  //console.log(true);
}

/*
changing array 2nd element
*/
let teatypes = ["herbal tea","white tea","masala tea"]
let realTea = "Milk Tea"
teatypes [1] = realTea;
//console.log(teatypes);

//push into array 
let citiesVisited = ["mumbai","sydney"]
citiesVisited.push("tokyo");
//console.log(citiesVisited);

//pop from array and store it.
let teaorders = ["chai", "icedtea","matcha",'coffee']
const lastorder =  teaorders.pop()
//console.log(teaorders);
//console.log(lastorder);

//create a soft copy (if changes in orignal softcopy also changes)
let popularTeas = ["black tea","milk tea", "masala tea", "chai"]
let softcopyteas = popularTeas;
popularTeas.pop
//console.log(softcopyteas);
//console.log(popularTeas);

//create hardcopy (if changes made to orignal array no impact)
let topcities = ["tokyo","berlin","singapore"]
let hardcopycities = [...topcities]
// let hardcopycities = topcities.slice
topcities.pop
//console.log(hardcopycities);

// merge 2 arrays
let eurocities = ["paris","rome" ]
let asiancities = [ "tokyo","bangkok"]
//let worldcities = eurocities + asiancities creates a string
let worldcities = eurocities.concat(asiancities)
// console.log(worldcities);

//store length
let teamenu = ["masala tea","oolong tea","chai","black tea"]
let menulength = teamenu.length
// console.log(menulength);

//store an array elemt in varaiable
let citybucketlist = ["kyoto", "london","cape town", "vancouver"]
let isLONDONinlist = citybucketlist.includes("london");

