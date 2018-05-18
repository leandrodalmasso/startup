function fadein(section) {
  if (section.className == "section section_transparency_full") {
    section.className = "section section_transparency_fadein";
  }
}

function fadeinSection(section) {
  fadein(section);
}

let helloWorldSection = document.getElementById("hello-world");

document.addEventListener("load", fadeinSection(helloWorldSection));