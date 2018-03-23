// arguments object - no longer bound with arrow functions
const add = (a, b) => {
  return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: "Andy",
  cities: ["Toronto", "Xian"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return new array where numbers have been multiplied
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
