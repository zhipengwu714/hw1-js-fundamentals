// This is a comment - JS ignores it
console.log("Day 1: Git + GitHub + JS");

// const = constant (cannot change)
const name = "Zhi Peng Wu";
console.log("Hello,", name);

// let = can be reassigned later
let score = 100;
score = score + 10;
console.log("Score:", score);

// Function = reusable block of code
// "person" is a parameter (input)
function greet(person) {
  // return = send value back
  return `Welcome, ${person}!`;
}

// Call the function with "name" as input
console.log(greet(name));
console.log(greet("Alice"));
console.log(greet("Bob"));

// Array = list of values in [ ]
const scores = [88, 92, 76, 81, 95, 100, 89];

console.log("All scores:", scores);
console.log("First score:", scores[0]);
console.log("Last score:", scores[4]);
console.log("How many?", scores.length);

function sum(arr) {
  let total = 0;
  for (const n of arr) {
    total += n;
  }
  return total;
}

console.log("Sum via function:", sum(scores));

function average(arr) {
  return sum(arr) / arr.length;
}

console.log("Average:", average(scores));

function max(arr) {
  let m = arr[0];
  for (const n of arr) {
    if (n > m) m = n;
  }
  return m;
}

console.log("Max:", max(scores));