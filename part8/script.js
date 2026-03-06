//example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(this);
    let para = document.getElementById("myParagraph");
    para.textContent = "the paragraph is changed";
  });

//example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

//example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newitem = document.createElement("li");
  newitem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newitem);
});

//example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//example 6
document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("jazz");
  });

//example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target.matches(".teaItem")) {
    alert("you selected: " + event.target.textContent);
  }
});

//example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent =
      `Feedback is : ${feedback}`;
  });

//example 9
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById("domStatus").textContent = "DOM Fully Loaded"
});

//example 10

