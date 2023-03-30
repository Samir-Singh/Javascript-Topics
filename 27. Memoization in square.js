// Memoization is an optimization technique which is used to reduce the calculation time by saving previous input value inside something like cache.
// Means instead of again calculating the result for previous input it just check if data already present in cache memory than simply return form it do not again calculate it

const square = (n) => {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      ans += 1;
    }
  }
  return ans;
};

console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));

// Here i call the square function multiple times and this square function runs for loop every call so this will take too much time instead of same input

// Optimized square: Here we store the result into the prevVal array and if user call the function with same input instead of again calculating the square we first check into the cache memory (prevVal) if that answer is present in that or not if present than return from cache memory

let prevVal = [];
const optimizedSquare = (n) => {
  if (prevVal[n] != null) {
    return prevVal[n];
  }
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      ans += 1;
    }
  }
  prevVal[n] = ans;
  return ans;
};

console.log(optimizedSquare(30000));
console.log(optimizedSquare(30000));
console.log(optimizedSquare(30000));
console.log(optimizedSquare(30000));
console.log(optimizedSquare(30000));
