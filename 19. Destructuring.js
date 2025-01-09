// Destructuring is used to unpack the items from an array and from an object into a variable.
// It is just another way to assign value to a variables.

// example using array
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // a=1, b=2, c=3

// example using object
let { d, e } = { name: "John", age: 22 };
console.log(d, e); // undefined, undefined

// in object destructure we have to write same variable name in left hand side as the right hand side and another way is below

let { name: myName, age: myAge } = { name: "John", age: 22 };
console.log(myName, myAge); // if you don't want to use right side object variable name

// nested destructuring
let user = {
  name: "Natasha",
  age: 24,
  fullName: {
    first: "Natasha",
    last: "Malkova",
  },
};

const {
  fullName: { first, last },
  age,
} = user;
console.log(first, last);
console.log(age);
