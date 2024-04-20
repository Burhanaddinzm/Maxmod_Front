"use strict";

const headerAccountEl = document.querySelector(".account-container .wrapper");
const headerAccountDropdownEl = document.querySelector(".account-dropdown");

const headerCartEl = document.querySelector(".header-cart");
const cartDrawerEl = document.querySelector(".cart-container .cart-drawer");
const cartOverlayEl = document.querySelector(".cart-container .overlay");
const cartDrawerCloseBtn = document.querySelector(
  ".cart-container .drawer-top button"
);

const headerCategoriesEl = document.querySelector(".header-bottom .categories");
const headerCategoriesChevron = document.querySelector(
  ".header-bottom .categories img"
);
const headerCategoriesDropdown = document.querySelector(
  ".header-bottom .categories .nav-dropdown"
);

//Toggle header categories dropdown
headerCategoriesEl.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-dropdown")) {
    headerCategoriesDropdown.classList.toggle("hidden");
    headerCategoriesChevron.classList.toggle("inverted");
  }
});

// Open drawer on cart click
headerCartEl.addEventListener("click", () => {
  cartDrawerEl.classList.remove("hidden");
  cartOverlayEl.classList.remove("hidden");
});

// Close drawer
[cartDrawerCloseBtn, cartOverlayEl].forEach((element) => {
  element.addEventListener("click", () => {
    cartDrawerEl.classList.add("hidden");
    cartOverlayEl.classList.add("hidden");
  });
});

// Toggle account dropdown
headerAccountEl.addEventListener("click", (e) => {
  e.preventDefault();
  headerAccountDropdownEl.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {
  const clicked = e.target;
  // Closes header dropdown when clicked on empty space
  if (
    !headerAccountEl.contains(clicked) &&
    !headerAccountDropdownEl.classList.contains("hidden")
  ) {
    headerAccountDropdownEl.classList.add("hidden");
  }

  //Closes header categories dropdown when clicked on empty space
  if (
    !headerCategoriesEl.contains(clicked) &&
    !headerCategoriesDropdown.classList.contains("hidden")
  ) {
    headerCategoriesDropdown.classList.add("hidden");
    headerCategoriesChevron.classList.remove("inverted");
  }
});
