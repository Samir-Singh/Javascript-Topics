// Counter using closure

function counter() {
  var count = 0;

  function inc(num) {
    count += num;
  }

  function dec(num) {
    count -= num;
  }

  function print() {
    console.log(count);
  }

  return {
    inc,
    dec,
    print,
  };
}

let c = counter();
c.inc(5);
c.inc(5);
c.dec(3);
c.print();
