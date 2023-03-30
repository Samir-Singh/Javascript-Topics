// Defining the callback function for first use case
function firstUseCaseCallback(data) {
  console.log("First Use Case:", data);
  // Do something specific for first use case with the data
}

// Defining the callback function for second use case
function secondUseCaseCallback(data) {
  console.log("Second Use Case:", data);
  // Do something specific for second use case with the data
}

// Defining the callback function for third use case
function thirdUseCaseCallback(data) {
  console.log("Third Use Case:", data);
  // Do something specific for third use case with the data
}

// Function to make API call
function getData(callback) {
  fetch("https://edtechservice.innovationm.com/v1/counsellor/topCounselors")
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error(error));
}

// Calling the function for first use case
getData(firstUseCaseCallback);

// Calling the function for second use case
getData(secondUseCaseCallback);

// Calling the function for third use case
getData(thirdUseCaseCallback);

//  Here if there is no callback in javascript than we have to make multiple getData function for different use cases thats why we use callback
