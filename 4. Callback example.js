function makeRequest(url, callback) {
  // make the HTTP request
  // when the response is received, call the callback function with the response data
  callback(responseData);
}

// define two different callback functions
function handleResponse1(response) {
  console.log('Response 1:', response);
}

function handleResponse2(response) {
  console.log('Response 2:', response);
}

// make the same request, but with different callback functions
makeRequest('http://example.com', handleResponse1);
makeRequest('http://example.com', handleResponse2);

//  Here for different handleResponse single makeRequest function is enough that's why callBack is come into picture
