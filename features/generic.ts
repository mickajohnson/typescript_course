// class ArrayOfNumbers {
//     constructor(public collection: number[]) {}

//     get(index: number): number {
//         return this.collection[index]
//     }
// }

// class ArrayOfStrings {
//     constructor(public collection: string[]) {}

//     get(index: number): string {
//         return this.collection[index]
//     }
// }

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "c"]);

// Example of generics with functions

// function printStrings(arr: string[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// function printNumbers(arr: number[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<number>([1, 2, 3]);

// Generic Constraints

class Car {
  print() {
    console.log("I am a Car");
  }
}

class House {
  print() {
    console.log("I am a House");
  }
}

interface Printable {
  print(): void;
}

// Use 'extends Printable' to ensure type has .print method
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House | Car>([new House(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);

// Advanced Generic Constraint

interface UserProps {
  name: string;
  age: number;
  id: number;
}

class Attributes<T> {
  constructor(private data: T) {}

  // aka arg to get must be a key of data object, and return will be type of the value at data[key]
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }
}

const attrs = new Attributes<UserProps>({ name: "Whatever", age: 20, id: 5 });

const userName = attrs.get("name");
const userAge = attrs.get("age");
