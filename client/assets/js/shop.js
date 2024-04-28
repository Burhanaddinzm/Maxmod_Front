"use strict";

const filterCategoriesBtn = document.querySelector(
  "main .shop-section .filter-categories-btn"
);
const filterCategoryBtns = document.querySelectorAll(
  "main .shop-section .category-btn"
);
const filterCategoriesUls = document.querySelectorAll(
  "main .shop-section .filter-categories-ul"
);
const filterSubcategoriesUls = document.querySelectorAll(
  "main .shop-section .filter-subcategories-ul"
);

// Toggle categories
filterCategoriesBtn.addEventListener("click", () => {
  toggleOpen(filterCategoriesUls);
});

// Toggle subcategories
filterCategoryBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    toggleOpen([filterSubcategoriesUls[index]]);
  });
});

// Function to toggle open
const toggleOpen = (elements) => {
  elements.forEach((element) => {
    element.classList.toggle("hidden");
    element.classList.toggle("open");
  });
};
