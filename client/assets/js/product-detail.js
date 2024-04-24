"use strict";

const shippingAccordion = document.querySelector(".shipping-return .top");
const shippingAccordionText = document.querySelector(
  ".shipping-return .bottom"
);

const variants = document.querySelectorAll(".variations label");

// Toggle accordion
shippingAccordion.addEventListener("click", () => {
  shippingAccordionText.classList.toggle("hidden");
  setTimeout(() => {
    shippingAccordionText.classList.toggle("open");
  }, 1);
});

// Change variations
variants.forEach((variant) => {
  variant.addEventListener("click", () => {
    if (variant.classList.contains("out")) return;

    variants.forEach((label) => {
      label.classList.remove("active");
    });

    variant.classList.add("active");
  });
});
