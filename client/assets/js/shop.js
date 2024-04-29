"use strict";

const filterCategoriesBtn = document.querySelector(
  "main .shop-section .filter-categories-btn"
);
const filterCategoriesBtnChevron = document.querySelector(
  "main .shop-section .filter-categories-btn img"
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

const filterBtns = document.querySelectorAll(
  "main .shop-section .filter-wrapper .filter-btn"
);
const filterUls = document.querySelectorAll(
  "main .shop-section .filter-wrapper .filter-ul"
);

const products = document.querySelectorAll(".product");

// Toggle categories
filterCategoriesBtn.addEventListener("click", () => {
  toggleOpen(filterCategoriesUls);
  filterCategoriesBtnChevron.classList.toggle("inverted");

  filterSubcategoriesUls.forEach((ul) => {
    ul.classList.add("hidden");
    ul.classList.remove("open");
  });
});

// Toggle subcategories
filterCategoryBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    toggleOpen([filterSubcategoriesUls[index]]);
  });
});

// Toggle filters
filterBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    toggleOpen([filterUls[index]]);
  });
});

// Function to toggle open
const toggleOpen = (elements) => {
  elements.forEach((element) => {
    element.classList.toggle("hidden");
    element.classList.toggle("open");
  });
};

// Change variation
products.forEach((product) => {
  const variants = product.querySelectorAll(".variations label");

  variants.forEach((variant) => {
    variant.addEventListener("click", () => {
      if (variant.classList.contains("out")) return;

      const activeVariants = product.querySelectorAll(
        ".variations label.active"
      );
      activeVariants.forEach((label) => {
        label.classList.remove("active");
      });

      variant.classList.add("active");
    });
  });
});
