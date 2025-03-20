// Arrays

let numbersArray: number[] = [1, 2, 3, 4];
let stringsArray: string[] = ["Apple", "Banana", "Pear", "Peach", "Grape"];
let stringAndNumsArr: (number | string)[] = ["Pesho", "Gosho", 2, "3"];

let fruits: string[] = ["Apple", "Cherry", "Ananas"];
let firstE1: string = fruits[1];
let secondE1: string = fruits[3];

fruits.push("Mango");

numbersArray.pop();

fruits.shift();

numbersArray.unshift(5);

let multiplyNumbers = numbersArray.map((element: number) => element * 2);

let multiplySpecialNumbers = numbersArray.map((element: number) => {
  if (element > 2) {
    return element * 2;
  } else {
    return element;
  }
});

let filterNumsArray = numbersArray.filter((element) => element > 2);
console.log("filterNumsArray", filterNumsArray);
