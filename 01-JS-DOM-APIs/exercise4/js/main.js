function makeAJAXCall(keyword) {
  let promiseObj = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/search/repositories?q=" + keyword);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          console.log("xhr done successfully");
          let apiResponse = xhr.responseText;
          let apiResponseJSON = JSON.parse(apiResponse);
          resolve(apiResponseJSON.items);
        } else {
          reject(Error(xhr.statusText));
          console.log("xhr failed");
        }
  
      } else {
        console.log("xhr processing going on");
      }
    };
  });
  return promiseObj;
}

function listRepositories(items) {
  let reposSection = document.getElementById("repos-section");
  let reposList = document.getElementById("repos-list");
  let newReposList = document.createElement("ul");

  reposSection.className -= " warning";

  for (let i = 0; i < items.length; i++) {
    let repoName = items[i].full_name;
    let newItem = document.createElement("li");
    newItem.innerHTML = repoName;
    newReposList.appendChild(newItem);
  }

  reposSection.replaceChild(newReposList, reposList);
  newReposList.setAttribute("id", "repos-list");
}

function errorHandler(status) {
  let reposSection = document.getElementById("repos-section");  
  let reposList = document.getElementById("repos-list");
  let newReposList = document.createElement("ul");

  let newItem = document.createElement("li");
  newItem.innerHTML = status;
  newReposList.appendChild(newItem);

  reposSection.replaceChild(newReposList, reposList);
  newReposList.setAttribute("id", "repos-list");
  
  reposSection.className += " warning";
}

let searchButton = document.getElementById("search-button");
let searchBox = document.getElementById("search-box");

searchButton.addEventListener("click", () => makeAJAXCall(searchBox.value).then(listRepositories, errorHandler));