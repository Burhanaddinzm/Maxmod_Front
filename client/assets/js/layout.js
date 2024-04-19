"use strict";

const headerAccountEl = document.querySelector(".account-container .wrapper");
const headerAccountDropdownEl = document.querySelector(".account-dropdown");

// Toggle account dropdown
headerAccountEl.addEventListener("click", (e) => {
  e.preventDefault();
  headerAccountDropdownEl.classList.toggle("hidden");
});

// Closes open menus when clicked on blank
window.addEventListener("click", (e) => {
  const clicked = e.target;
  if (
    !headerAccountEl.contains(clicked) &&
    !headerAccountDropdownEl.classList.contains("hidden")
  ) {
    headerAccountDropdownEl.classList.add("hidden");
  }
});
