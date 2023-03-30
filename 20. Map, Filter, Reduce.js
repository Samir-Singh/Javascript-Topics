// Map method is used to iterate over the array or an object and gives us the new array

// Filter method is used to filter out the value from an array or filter out the odd one from the array or an object and return the new array

// Reduce method is used to iterate over the whole array or an object and gives us the new value, there is two argument in reduce method function first one is accumulator and second one is the current value and there are two arguments in reduce method also first one is is the function and second one is the initial value of accumulator

let user = [
  { fName: "John", lName: "Singh", age: 26 },
  { fName: "Joy", lName: "Singhania", age: 75 },
  { fName: "Jackey", lName: "Chain", age: 50 },
  { fName: "Jerry", lName: "Mishra", age: 26 },
];

// 1. Problem statement is to gives us the full name list from the user
const fullName = user.map((item) => item.fName + " " + item.lName);
console.log(fullName);

// 2. Problem statement is gives us the list of user whose age is less than 30
const lessAge = user.filter((item) => item.age < 30);
console.log(lessAge);

// 3. Problem statement is to give us the output like this {26:2, 50:1, 75:1} means count of the age
const sampleOutput = user.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(sampleOutput);

// 4. Problem statement is to gives us the firstName of those whose age is less than 30
// This is called chaining
const firstNames = user
  .filter((item) => item.age < 30)
  .map((item) => item.fName);
console.log(firstNames);

// 5. The upper problem can also be done using reduce method
const firstNames2 = user.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.fName);
  }
  return acc;
}, []);
console.log(firstNames2);
