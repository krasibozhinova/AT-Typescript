// Create an array of strings and add a new element at the end of the array. Log the result.

let userNames: string[] = ["Ivan", "Toni", "Anna", "Dimitar", "Krasi"];

userNames.push("Sonq");
console.log("The new array is:", userNames);

// Create an array of numbers and remove the first element from the array. Log the result.
let numbers: number[] = [0, 1, 2, 3, 4, 5];

numbers.shift();
console.log("The new array is:", numbers);

// Use the map method to create a new array and divide each number by 2  “num / 2”
// from [1, 2, 3, 4, 5].  Log the result.

let divideNumbers = numbers.map((element: number) => element / 2);
console.log("The new array is:", divideNumbers);

// Use the filter method to create a new array containing only numbers greater
// than 5 from [3, 7, 1, 9, 12, 4]. Log the result.

let nums: number[] = [3, 7, 1, 9, 12, 4];
let greaterNumbers = nums.filter((element: number) => element > 5);
console.log("The new array is:", greaterNumbers);

// Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order.
// Log the result.

let arrayOfNumbers: number[] = [9, 3, 7, 2, 8, 5];
let sortNumbers = arrayOfNumbers.sort((a, b) => a - b);
console.log("The new array is:", sortNumbers);

// Use the slice method to extract the first three elements from
// ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.

let fruitsArray: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("The new array is:", fruitsArray.slice(0, 3));

// Use the splice method to remove the second and third elements from
// ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.

let vehicles: string[] = ["car", "bike", "bus", "train", "boat"];
vehicles.splice(1, 2);
console.log("The new array is:", vehicles);
