const headingOne = document.getElementById("title") as HTMLHeadingElement;
headingOne.textContent = "Welcome to DOM Manipulations";

const divEl = document.querySelector("p") as HTMLParagraphElement;
divEl.style.color = "blue";

const listItems: HTMLCollectionOf<Element> =
  document.getElementsByTagName("li");

listItems[0].textContent = "Apple";
listItems[1].textContent = "Orange";
listItems[2].textContent = "Mango";

const learnBtn = document.querySelector(".learn button") as HTMLButtonElement;
learnBtn.style.border = "1px solid red";
