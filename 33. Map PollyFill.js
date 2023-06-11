//  Basic Version of map polyFill
let arr = [1, 2, 3, 4];

function mapPolyFill(arr, cb) {
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push(cb(arr[i]));
  }

  return temp;
}

function multipleTwo(item) {
  return item * 2;
}

let newArr = mapPolyFill(arr, multipleTwo);

console.log(newArr);

// Advance version of map polyFill
Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i]));
  }

  return temp;
};

let newArr2 = arr.myMap((item) => {
  return item * 2;
});

console.log(newArr2);
