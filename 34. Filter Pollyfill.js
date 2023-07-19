// pollyfill for filter
let arr = [1, 2, 3, 4];

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let ans = arr.myFilter((item) => {
  return item >= 4;
});

console.log(ans);
