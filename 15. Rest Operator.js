// Rest Operator is denoted by three dots (...)
// It is used as a parameter it converts the multiple passed value into an array
// It is must to write ...rest at last of the arguments else it will throw an error

function addition(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  console.log(sum);
}

addition(1, 2);
addition(1, 2, 3);
addition(1, 2, 3, 4);
