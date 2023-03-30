// The best example for memoization is fibonacci series

const fibonacci = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(40));
console.log(fibonacci(41));
console.log(fibonacci(42));
console.log(fibonacci(43));

// Optimized version of fibonacci series which is also known as dynamic programming

let prevVal = [];
const optimizedFib = (n) => {
  if (prevVal[n] != null) {
    return prevVal[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = optimizedFib(n - 1) + optimizedFib(n - 2);
  }

  prevVal[n] = result;
  return result;
};
console.log(optimizedFib(40));
console.log(optimizedFib(41));
console.log(optimizedFib(42));
console.log(optimizedFib(43));
