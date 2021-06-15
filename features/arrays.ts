const carMakers = ['ford', 'toyota', 'chevy'];

// if initializing empty array, add annotation

const futureStuff: string[] = [];

const dates = [new Date(), new Date(), new Date()];

// const carsByMake = [['f150']['corolla']['camaro']];
const carsByMake: string[][] = [['f150']['corolla']['camaro']];

// Help with inference when extracting values
const cars = carMakers[0];
const myCar = carMakers.pop();

// Help prevent adding in incompatible values
// carMakers.push(100)

// Help with 'map' and other functions
carMakers.map((car: string): string => {
  // got autocomplete on the method below
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
