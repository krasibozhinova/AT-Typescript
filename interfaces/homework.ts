// Create a TypeScript interface named Person that represents a person with the following properties: name, lastName,
// age, email, phoneNumber

export interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
}

//Create a TypeScript interface named PersonInfo that extends Person type from the previous exercise and add the
// following properties: country (optional string property) and greeting (optional method that return welcome message)

export interface PersonInfo extends Person {
  country?: string;
  greeting?: () => string;
}
