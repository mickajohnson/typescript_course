let apples: number = 5;
let speed: string = 'fast';

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Most of the above is largely unnecessary. Would get it through inference

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';

const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'true'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When variable whose type cannot be inferred correctly
// Contrived bad code example
const numbers = [-10, -1, 12];
// let numberAboveZero = false;
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
