"use strict";

const headerAccountEl = document.querySelector(".account-container .wrapper");
const headerAccountDropdownEl = document.querySelector(".account-dropdown");

// Toggle account dropdown
headerAccountEl.addEventListener("click", () => {
  headerAccountDropdownEl.classList.toggle("hidden");
});

// Closes account dropdown when user clicks anywhere other than the account dropdown
window.addEventListener("click", (e) => {
  const clicked = e.target;
  if (
    !headerAccountEl.contains(clicked) &&
    !headerAccountDropdownEl.classList.contains("hidden")
  ) {
    headerAccountDropdownEl.classList.add("hidden");
  }
});
