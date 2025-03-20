// Write a function named “findLargest” that takes three numbers as
// parameters and returns the largest of them.
// Use if/else statement to find the largest number. Log the result.

function findLargest(num1: number, num2: number, num3: number): number {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log("The largest number is:", findLargest(20, 4, 8));

// Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters.
// Log the result with default parameter and with passed parameter.

function convertToCentimeters(inches: number = 1): number {
  return inches * 2.54;
}

console.log("The defaul parameter is:", convertToCentimeters());
console.log("The passed parameter is:", convertToCentimeters(10));

// Write a function named “calculateArea” that takes a required width parameter and an optional height parameter.
// If height is not provided, assume the shape is a square.

function calculateArea(width: number, height?: number): number {
  if (height) {
    return width * height;
  } else {
    return width * width;
  }
}

console.log("The area without height is:", calculateArea(4));
console.log("The area with height is:", calculateArea(4, 10));
