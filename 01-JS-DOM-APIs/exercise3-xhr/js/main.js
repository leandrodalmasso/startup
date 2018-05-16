function fadein(section) {
  if (section.className == "section section_transparency_full") {
    section.className = "section section_transparency_fadein";
  }
}

let helloWorldSection = document.getElementById("hello-world");

document.addEventListener("load", fadein(helloWorldSection));

/*
Fetch a joke and write it inside the section element.

function getJoke() {
  // Make an instance of XMLHttpRequest. Using the instance we can trigger the XHR call and get the response.
  let xhr = new XMLHttpRequest();
  // XMLHttpRequest.open() method initializes a newly-created request, or re-initializes an existing one.
  xhr.open("GET", "http://api.icndb.com/jokes/random");
  // XMLHttpRequest.send() method sends the request to the server.
  xhr.send();

  // XMLHttpRequest.onreadystatechange is an event handler that is called whenever the readyState property changes.
  // The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in.
  xhr.onreadystatechange = function() {
    // When XMLHttpRequest.readyState === 4, it was received by the server
    if (xhr.readyState == 4) {
      // The read-only XMLHttpRequest.status property returns the numerical status code of the response of the XMLHttpRequest. XMLHttpRequest.status == 200 denotes a successful request.
      if (xhr.status == 200) {
        console.log("xhr done successfully");
        // XMLHttpRequest.responseText returns the text received from a server following a request being sent.
        let apiResponse = xhr.responseText;
        // The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
        let apiResponseJSON = JSON.parse(apiResponse);
        let paragraph = document.getElementById("joke-paragraph");
        // The content field I need is joke and the path to that field is value.joke
        paragraph.innerHTML = apiResponseJSON.value.joke;
      } else {
        console.log("xhr failed");
      }
    } else {
      console.log("xhr processing going on");
    }
  };
}

let getJokeButton = document.getElementById("get-joke-button");

getJokeButton.addEventListener("click", getJoke);

*/

/*
Callback

function makeAJAXCall(url, methodType, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(methodType, url);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        console.log("xhr done successfully");
        let apiResponse = xhr.responseText;
        let apiResponseJSON = JSON.parse(apiResponse);
        callback(apiResponseJSON);
      } else {
        console.log("xhr failed");
      }

    } else {
      console.log("xhr processing going on");
    }
  };
}

function changeJokeParagraph(response) {
  let paragraph = document.getElementById("joke-paragraph");
  paragraph.innerHTML = response.value.joke;  
}

let getJokeButton = document.getElementById("get-joke-button");

getJokeButton.addEventListener("click", () => makeAJAXCall("http://api.icndb.com/jokes/random", "GET", changeJokeParagraph));

*/

/*
Reusable function to perform AJAX calls. This function accepts a config object and returns an ES6 Promise.
*/

// config = {method: "GET", url: "url"}
function makeAJAXCall(config) {
  // Create the promise object
  let promiseObj = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          console.log("xhr done successfully");
          let apiResponse = xhr.responseText;
          let apiResponseJSON = JSON.parse(apiResponse);
          // Promise object is resolved with the response text
          resolve(apiResponseJSON);
        } else {
          // Promise object is rejected with Error object and statusText for info
          reject(Error(xhr.statusText));
          console.log("xhr failed");
        }
  
      } else {
        console.log("xhr processing going on");
      }
    };
  });
  // Return the promise object
  return promiseObj;
}

function changeJokeParagraph(response) {
  let paragraph = document.getElementById("joke-paragraph");
  paragraph.innerHTML = response.value.joke;  
}

function errorHandler(status) {
  let paragraph = document.getElementById("joke-paragraph");
  paragraph.innerHTML = status;

  if (helloWorldSection.className == "section section_transparency_fadein") {
    helloWorldSection.className = "section section_message_error";
  }
}

let getJokeButton = document.getElementById("get-joke-button");
let configObj = {method: "GET", url: "http://api.icndb.com/jokes/random"};

getJokeButton.addEventListener("click", () => makeAJAXCall(configObj).then(changeJokeParagraph, errorHandler));