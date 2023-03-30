function getData() {
  return new Promise((resolve, reject) => {
    fetch("https://edtechservice.innovationm.com/v1/counsellor/topCounselors")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

getData()
  .then((data) => {
    console.log("first use case: ", data);
    return getData();
  })
  .then((data) => {
    console.log("second use case: ", data);
    return getData();
  })
  .then((data) => {
    console.log("third use case: ", data);
    return getData();
  })
  .then((data) => {
    console.log("fourth use case: ", data);
    // and so on...
  })
  .catch((error) => console.error(error));

// Promises are used for reduce the callback hell
