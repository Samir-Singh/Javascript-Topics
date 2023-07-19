// pollyfill for map method

let arr = [1, 2, 3, 4];

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let ans = arr.myMap((item) => {
  return item * 3;
});

console.log(ans);
