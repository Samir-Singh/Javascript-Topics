// Spread operator is denoted by three dots (...)
// It unpacks the any iterable objects such as array, sets, maps into a list

// 1. Constructing array literal
// The spread operator allows you to insert another array into the initialized array when you construct an array using the literal form. See the following example:
let initializedArr = [1, 2, 3];
let arr = [...initializedArr, 4, 5, 6];
console.log(arr);

// 2. Concatenation of the array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let finalArray = [...arr1, ...arr2];
console.log(finalArray);

// 3. Shallow copy of an array
let arr3 = [1, 2, 3];
let arr4 = [...arr1];
arr1[0] = 2;
console.log(arr3, arr4);

// 4. Spread operator in string as well
let chars = ["A", ..."BC", "D"];
console.log(chars);
