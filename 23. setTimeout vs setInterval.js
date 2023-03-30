// setTimeout is a function which take another function as a callback and second argument as a timer to after what time we have to call that function. setTimeout call its function only one time.

// clearTimeout is used to clear the setTimeout function

// setInterval is a function which takes another function as a callback and second argument as a timer and call its function again and again.

// clearInterval is used to clear the setInterval

// setTimeout and setInterval both returns a timer id which can used to clear the time

setTimeout(() => {
  console.log("hi samir");
}, 5000);

setTimeout(
  (a, b) => {
    console.log(a + b);
  },
  5000,
  1,
  2
);

setInterval(
  (a, b) => {
    console.log(a + b);
  },
  2000,
  3,
  2
);

const a = setTimeout(() => {
  console.log("this will not executes");
}, 1000);

clearTimeout(a);

let i = 0;
const b = setInterval(() => {
  if (i == 5) {
    clearInterval(b);
  }
  console.log(i);
  i++;
}, 2000);
