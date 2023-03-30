function makeRequest(url) {
  // make the HTTP request
  // when the response is received, call the handleResponse1 function with the response data
  handleResponse1(responseData);
}

function makeRequest2(url) {
  // make the HTTP request
  // when the response is received, call the handleResponse2 function with the response data
  handleResponse2(responseData);
}

// define two different callback functions
function handleResponse1(response) {
  console.log("Response 1:", response);
}

function handleResponse2(response) {
  console.log("Response 2:", response);
}

// make the same request, but with different callback functions
makeRequest("http://example.com");
makeRequest2("http://example.com");

//  Here if we dont have callback in javascript than we have to create multiple makeRequest function declaration to handle handleResponse
// Suppose if there are thousands of api calls than how many makeRequest function declaration you have to make
