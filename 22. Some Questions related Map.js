const arr = ["a", "b", "b", "c", "a", "b"];

// 1. Occurence of an element
// ex : {a:2, b:3, c:1}

// Using object
let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]]++;
  } else {
    obj[arr[i]] = 1;
  }
}
console.log(obj);

// Using map
let myMap = new Map();
for (let i = 0; i < arr.length; i++) {
  if (myMap.has(arr[i])) {
    let val = myMap.get(arr[i]);
    val++;
    myMap.set(arr[i], val);
  } else {
    myMap.set(arr[i], 1);
  }
}
myMap.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});

// 2. Remove the duplicacy
// ex : [a,b,c]

// Using object
let ans = [];
let obj2 = {};
for (let i = 0; i < arr.length; i++) {
  if (!obj2[arr[i]]) {
    ans.push(arr[i]);
    obj2[arr[i]] = 1;
  }
}
console.log(ans);

// Using map
let ans2 = [];
let myMap2 = new Map();
for (let i = 0; i < arr.length; i++) {
  if (!myMap2.has(arr[i])) {
    ans2.push(arr[i]);
    myMap2.set(arr[i], 1);
  }
}
console.log(ans2);

// 3. Which element occurs more number of time
// ex : b

// Using object
let obj3 = {};
let ans3 = null;
let maxVal = 0;
for (let i = 0; i < arr.length; i++) {
  if (obj3[arr[i]]) {
    obj3[arr[i]]++;
  } else {
    obj3[arr[i]] = 1;
  }

  if (obj3[arr[i]] > maxVal) {
    maxVal = obj3[arr[i]];
    ans3 = arr[i];
  }
}

console.log(ans3);

// Using map
let myMap3 = new Map();
let ans4 = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (myMap3.has(arr[i])) {
    let val = myMap.get(arr[i]);
    val++;
    myMap.set(arr[i], val);
  }

  if (myMap.get(arr[i]) > myMap.get(ans4)) {
    ans4 = arr[i];
  }
}

console.log(ans4);
