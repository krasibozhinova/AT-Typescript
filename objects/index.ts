type Role = {
  role: "manager" | "founder";
};

type Permissions = {
  permissions: "admin" | "user";
};

type User = Role & Permissions;

const user: User = {
  role: "founder",
  permissions: "admin",
};

console.log("userObject", user);

// Object types with Interfaces

interface Animal {
  species: string;
  breed?: string;
  age: number;
  weight?: number;
  name: string;
}

const animal: Animal = {
  species: "dog",
  age: 3,
  weight: 5,
  name: "Sharo",
};

console.log("animalObject", animal);

interface Cars {
  color: string;
  wheels: number;
  transmission: "manual" | "automatic";
  fuelType: "diesel" | "gasoline";
  startEngine: () => string;
}

const car: Cars = {
  color: "white",
  wheels: 4,
  transmission: "manual",
  fuelType: "diesel",
  startEngine: function () {
    return "Start the engine";
  },
};

// car.startEngine()
console.log("car", car.startEngine());

// get object keys
const keys = Object.keys(car);

// get object values
const values = Object.values(car);
console.log("values", values);

// assign two objects in one
const colorObject = {
  color: "black",
};

const backgroundObject = {
  background: "white",
};

const assignedObject = Object.assign({}, colorObject, backgroundObject);
console.log("assignedObject", assignedObject);

export {};
