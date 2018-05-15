function fadein(section) {
  if (section.className == "section section_transparency_full") {
    section.className = "section section_transparency_fadein";
  }
}

let helloWorldSection = document.getElementById("hello-world");

document.addEventListener("load", fadein(helloWorldSection));

let alertButton = document.getElementById("alert-button");

alertButton.addEventListener("click", () => alert("Great! Now press OK."));