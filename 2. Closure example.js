// A function with its lexical scope bundled together inside the function forms a closure
//  i.e. the inner function that has access to the variable of outer function and remember the variable of its parent even after returns

// example of closure with a function once ..... here function once execute only one time even if you called it multiple time

function foo() {
  var a = 0;
  return function goo() {
    if (a === 1) return;
    console.log("Closure");
    a++;
  };
}

var a = foo();
a();
a();
a();

/*
  Here you can see i call the function (a) multiple times but this function execute only one time because of the closure .....  the returned function goo remember from where it is called.
  */
