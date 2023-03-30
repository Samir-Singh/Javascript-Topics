// Implementation of infinite currying. Means user can pass any number of arguments

function addition(a) {
  return function (b) {
    if (b) return addition(a + b);
    return a;
  };
}

let ans = addition(1)(2)(); // here at last we have to add extra () because this means that inside b variable there is no value passed
console.log(ans);
