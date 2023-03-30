function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register end");
      resolve();
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("email end");
      resolve();
    }, 2000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("Error while login");
      console.log("login end");
      resolve();
    }, 1000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("get data end");
      resolve();
    }, 3000);
  });
}

function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display data end");
      resolve();
    }, 1000);
  });
}

register()
  .then(sendEmail)
  .then(login)
  .then(getData)
  .then(displayData)
  .catch((err) => console.log(err));
