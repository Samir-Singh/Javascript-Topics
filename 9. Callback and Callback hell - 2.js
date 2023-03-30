function register(callback) {
  setTimeout(() => {
    console.log("register end");
    callback();
  }, 1000);
}

function sendEmail(callback) {
  setTimeout(() => {
    console.log("email end");
    callback();
  }, 2000);
}

function login(callback) {
  setTimeout(() => {
    console.log("login end");
    callback();
  }, 1000);
}

function getData(callback) {
  setTimeout(() => {
    console.log("get data end");
    callback();
  }, 3000);
}

function displayData() {
  setTimeout(() => {
    console.log("display data end");
  }, 1000);
}

register(function () {
  sendEmail(function () {
    login(function () {
      getData(function () {
        displayData();
      });
    });
  });
});
