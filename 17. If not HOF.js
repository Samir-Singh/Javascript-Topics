//  Here our problem statement is there is a radius array we have to find the area, circumference and diameter of a circle.

let arr = [1, 2, 3, 4];

const calculateArea = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(Math.PI * arr[i] * arr[i]);
  }
  return output;
};
console.log(calculateArea(arr));

const calculateCircumference = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(2 * Math.PI * arr[i]);
  }
  return output;
};
console.log(calculateCircumference(arr));

const calculateDiameter = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(2 * arr[i]);
  }
  return output;
};
console.log(calculateDiameter(arr));
