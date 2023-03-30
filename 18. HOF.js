// Higher order function is a function which takes another function as a argument or return another function from a function
// Higher order allow us to write reusable code and get rid of us for writing repetitive logic
let arr = [1, 2, 3, 4];

const area = (r) => {
  return Math.PI * r * r;
};

const circumference = (r) => {
  return 2 * Math.PI * r;
};

const diameter = (r) => {
  return 2 * r;
};

const calculate = (arr, logic) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

console.log(calculate(arr, area));
console.log(calculate(arr, circumference));
console.log(calculate(arr, diameter));

// Here as you can see with the use of HOF we write the same previous code in a very simple manner.
// Here calculate is the HOF and the area, circumference and diameter function where logic is written is a callback function.
// In previous code the output = [], for loop and return output logic repeat many times that's why we use HOF to remove this issue.
