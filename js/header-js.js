let mobileNavMenu = document.querySelector("nav ul");

document.onclick = function (e) {
  let target = e.target;

  if (target.closest(".menu-icon-container"))
    mobileNavMenu.classList.toggle("navLinks-displayer");
  else if (target.closest(".navLinks-container")) return;
  else {
    if (mobileNavMenu.classList.contains("navLinks-displayer")) {
      mobileNavMenu.classList.remove("navLinks-displayer");
    }
  }
};
