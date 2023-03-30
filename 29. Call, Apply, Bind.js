// 1. Call method is used to borrow function from one object to another it is also called function borrowing.

let userDetails = {
  name: "Samir",
  printDetails: function (designation, state) {
    console.log(this.name + " is a " + designation + " from " + state);
  },
};

userDetails.printDetails("Developer", "Gorakhpur");

let userDetails2 = {
  name: "John",
};

userDetails.printDetails.call(userDetails2, "Tester", "Rajasthan");

// Here we use call method because the this keyword inside userDetails object instead of pointing to userDetails object, can also point to the userDetails2 object

// 2. Apply method is same as call method just the difference is in apply method we use array list to pass the multiple arguments

let arr = ["Devops", "Bihar"];
userDetails.printDetails.apply(userDetails2, arr);

// 3. Bind is also same as call method the difference is the call method invoke immediately but the bind method returns the function which can invoke later

let ans = userDetails.printDetails.bind(userDetails2, "BA", "Gujarat");
ans();
