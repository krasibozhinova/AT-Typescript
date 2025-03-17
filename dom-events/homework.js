// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
var addBorderBtn = document.querySelector("#add-border-btn");
var content = document.querySelector(".content");
addBorderBtn.addEventListener("click", function () {
    content.style.border = "2px solid red";
});
// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
var changeTextBtn = document.querySelector("#change-text-btn");
changeTextBtn.addEventListener("click", function () {
    content.style.color = "blue";
});
// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
// In case it is the button with id "change-text-btn":
// changeTextBtn.addEventListener("click", () => {
//   content.style.backgroundColor = "grey";
// });
// In case it is the button with id "toggle-bg-btn":
var toggleBgBtn = document.querySelector("#toggle-bg-btn");
toggleBgBtn.addEventListener("click", function () {
    content.style.backgroundColor = "grey";
});
//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
content.addEventListener("mouseover", function () {
    content.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
});
