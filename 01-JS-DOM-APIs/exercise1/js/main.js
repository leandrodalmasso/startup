function fadein(section) {
  if (section.className == "section section_transparency_full") {
    section.className = "section section_transparency_fadein";
  }
}

let helloWorldSection = document.getElementById("hello-world");

window.addEventListener("load", () => fadein(helloWorldSection));