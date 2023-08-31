// Map is a collection in javascript which is used to store the key value pairs
// Set is also like map but set contains unique values

// Different methods to initialize the map

// 1st method
const myMap = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]);

// 2nd method
const myMap2 = new Map();
myMap2.set(1, "a");
myMap2.set(2, "b");
myMap2.set(3, "c");

// getting data from map
console.log(myMap.get(1));
console.log(myMap2.get(2));
console.log(myMap.get(5)); // getting undefined if there is no key

// iterate over map
myMap.forEach((val, key) => {
  console.log(`${key} => ${val}`);
});

// another way if key is present in map or not using has() property
console.log(myMap.has(1));
console.log(myMap.has(5));

// size method to check the size of the map
console.log(myMap.size);

// Set examples
const arr = ["a", "b", "c", "a", "b"];

const mySet = new Set(arr);

mySet.forEach((item) => {
  console.log(item); // o/p -> [a,b,c]
});

// Set also has same properties of map like size,has,delete etc.
