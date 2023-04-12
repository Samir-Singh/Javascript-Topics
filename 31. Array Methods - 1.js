// 1. toString : Converted an array into a string
let num = [1, 2, 3];
let b = num.toString();
for (let i = 0; i < b.length; i++) {
  console.log(b[i]);
}

// 2. join : joins all the array element into a separator and also returns a string
let c = num.join("_");
console.log(c);

// 3. pop : removes the last element from an array and it modifies the original array and it returns the popped element
let num2 = [1, 2, 3];
let r = num2.pop();
console.log(num2, r);

// 4. push : add a new element at the end of an array and it modified the original array and it returns the new array length
let n = num.push(40);
console.log(num, n);

// 5. shift : removes the first element from an array and it modifies the original array and it returns the popped element
let num3 = [1, 2, 3];
let r2 = num3.shift();
console.log(num3, r2);

// 6. unshift : add a new element at the beginning of the array and it modifies the original array and it returns the new array length
let num4 = [1, 2, 3];
let n2 = num4.unshift(20);
console.log(num4, n2);
