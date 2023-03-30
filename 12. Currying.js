// Function currying is just the another way to pass the argument to the function it use the concept of closure

function addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let ans = addition(1)(2)(3);
console.log(ans);
