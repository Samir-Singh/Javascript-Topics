let arr = [1, 2, 3, 4];

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      temp.push(this[i]);
    }
  }

  return temp;
};

let newArr = arr.myFilter((item) => {
  return item > 2;
});

console.log(newArr);
