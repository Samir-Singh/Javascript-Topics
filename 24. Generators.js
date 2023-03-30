// Generators are the function which is identify by * (star) after the function keyword.

// when we run the simple function it runs once from top to bottom and again if we call that simple function it again run from top to bottom but generator function pause its execution and than resume from where it is returned

// we can get the values from generator function by using next keyword it return an object which has two properties value and done

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const gen = numberGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Here when we call the generator function at line 15 the generator function returns object with value 1 and then pause the function at line 8 and when we again call the generator function at line 16 the generator function then function resume its execution and returns the next yield value and again pause
