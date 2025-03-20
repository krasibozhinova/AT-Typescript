// Create an object of type Person using the interface from Exercise 1.
// Declare a variable person1 of type Person.

import { Person, PersonInfo } from "../interfaces/homework";

const person1: Person = {
  name: "Ivan",
  lastName: "Petrov",
  age: 21,
  email: "test@gmail.com",
  phoneNumber: 111231,
};

console.log("personObject", person1);

//Create an object of type PersonInfo using the interface from Exercise 2.
// Declare a variable person2 of type PersonInfo.

const person2: PersonInfo = {
  name: "Sonq",
  lastName: "Ivanova",
  age: 20,
  email: "test1@gmail.com",
  phoneNumber: 345789,
  country: "Bulgaria",
  greeting: function () {
    return "Welcome";
  },
};
