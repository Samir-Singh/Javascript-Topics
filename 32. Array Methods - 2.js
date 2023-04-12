// 1. delete : delete is not a method it is an operator and it doesn't affect array length the length will be same
let num = [1, 2, 3, 4, 5, 6, 7, 8];
delete num[3];
console.log(num);

// 2. concat : used to join the multiple arrays it does not modifies the original array
let num2 = [9, 10, 11];
let newarr = num.concat(num2);
console.log(newarr);

// 3. sort : alphabetically sort the array doesn't works on numeric array modifies the original array
let num3 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
num3.sort();
console.log(num3);

// sort function takes the optional argument compare function
let num4 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
const compare = (a, b) => {
  return a - b;
};
num4.sort(compare);
console.log(num4);

// 4. reverse : reverse an array and modifies the original array
let num5 = [1, 2, 3, 4];
num5.reverse();
console.log(num5);

// 5. splice : add new elements to an array and modifies the original array and it returns the deleted items into an array
// syntax : arr.splice(position, no. of element to remove, element to be added)
let num6 = [1, 2, 3, 4, 5, 6];
let n = num6.splice(2, 3, 10, 20, 30, 40);
console.log(num6, n);

// 6. slice : slice out the piece of an array and returns new array and doesn't modifies the original array
let num7 = [1, 2, 3, 4, 5, 60, 6, 7, 4];
let newarray = num7.slice(3);
let newarray2 = num7.slice(3, 5);
console.log(newarray);
console.log(newarray2);
