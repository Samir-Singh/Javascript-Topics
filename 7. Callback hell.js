function getData(callback) {
  fetch("https://edtechservice.innovationm.com/v1/counsellor/topCounselors")
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error(error));
}

getData((data) => {
  console.log("first use case: ", data);
  getData((data) => {
    console.log("second use case: ", data);
    getData((data) => {
      console.log("third use case: ", data);
      getData((data) => {
        console.log("fourth use case: ", data);
        // and so on...
      });
    });
  });
});

// To handle this hell issue we have promises in javascript
