//  5 major difference between simple function and arrow function

// 1. Syntax
function foo(num) {
  console.log(num * num);
}

const Arrowfoo = (num) => {
  console.log(num * num);
};

// 2. Implicit return keyword :  if one liner code no need to curly braces and return keyword in arrow function
function foo2(num) {
  return num * num;
}

const Arrowfoo2 = (num) => num * num;

// 3. arguments keyword is present inside the simple function but not in arrow function
function foo3() {
  console.log(arguments);
}
foo3(2, 3, 4, 5);

const Arrowfoo3 = () => {
  console.log(arguments);
};
Arrowfoo3(1, 2, 3);

// 4. this keyword -> there is no this keyword in arrow function but in simple function it has
let user = {
  name: "Samir",

  printName: function () {
    console.log(this.name);
  },

  printName2: () => {
    console.log(this.name);
  },
};

user.printName(); // o/p: Samir -> because here this refers to the user object
user.printName2(); // o/p: undefined -> because here this refers to the window object because arrow function does'nt have this

// 5. Hoisting : in arrow function we cannot access arrow function before its declaration, but in simple function we can
foo(); // o/p : Hi Samir because foo4() function is hoisted
function foo4() {
  console.log("Hi Samir");
}

Arrowfoo4(); // o/p : error because here Arrowfoo4() function act as a variable and hoisted to the top but act as a variable
const Arrowfoo4 = () => {
  console.log("Hi Samir");
};
