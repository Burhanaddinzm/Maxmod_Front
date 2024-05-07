"use strict";

const sections = document.querySelectorAll("section");

const products = document.querySelectorAll(".weeks-highligths-section .slide");

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

// Add scroll effects to each section. Triggers on window scroll and initial load
const scrollAnimation = () => {
  sections.forEach((section) => {
    if (section.classList.contains("introduction-section")) return;

    const triggerPoint = window.innerHeight * 0.9;
    const distanceFromTop = section.getBoundingClientRect().top;

    if (distanceFromTop < triggerPoint) {
      section.style = "";
    } else {
      section.style.opacity = "0";
      section.style.transform = "translateY(80px)";
    }
  });
};

scrollAnimation();
window.addEventListener("scroll", scrollAnimation);

// Adding slider functionality to each section which has a slider.
sections.forEach((section, index) => {
  const slider = section.querySelector(".slider");
  if (!slider) return;
  if (section.classList.contains("vendor-section")) return;
  const slideCount = slider.querySelectorAll(".slide").length;
  const slideWrapper = slider.querySelector(".slide-wrapper");
  const slides = slider.querySelectorAll(".slide");
  const backBtn = slider.querySelector(".slider-back");
  const frwrdBtn = slider.querySelector(".slider-frwd");

  if (section.classList.contains("shop-by-category-section")) {
    if (slideCount <= 6) {
      backBtn.classList.add("hidden");
      frwrdBtn.classList.add("hidden");
      return;
    }

    backBtn.addEventListener("click", (event) =>
      moveSlide(
        event,
        30,
        6,
        slideCount,
        slideWrapper,
        slides,
        backBtn,
        frwrdBtn,
        index
      )
    );
    frwrdBtn.addEventListener("click", (event) =>
      moveSlide(
        event,
        30,
        6,
        slideCount,
        slideWrapper,
        slides,
        backBtn,
        frwrdBtn,
        index
      )
    );
  }

  if (section.classList.contains("weeks-highligths-section")) {
    if (slideCount <= 4) {
      backBtn.classList.add("hidden");
      frwrdBtn.classList.add("hidden");
      return;
    }

    backBtn.addEventListener("click", (event) =>
      moveSlide(
        event,
        30,
        4,
        slideCount,
        slideWrapper,
        slides,
        backBtn,
        frwrdBtn,
        index
      )
    );
    frwrdBtn.addEventListener("click", (event) =>
      moveSlide(
        event,
        30,
        4,
        slideCount,
        slideWrapper,
        slides,
        backBtn,
        frwrdBtn,
        index
      )
    );
  }
});

const moveSlide = (
  event,
  gap,
  visibleSlideCount,
  slideCount,
  slideWrapper,
  slides,
  backBtn,
  frwrdBtn,
  sectionIndex // Pass section index to identify which section is being targeted
) => {
  if (slideCount <= visibleSlideCount) return;

  const button = event.target.closest(".slider-back, .slider-frwd");

  if (!button) return;

  // Get sliderIndex for the current section
  let sliderIndex = parseInt(sections[sectionIndex].dataset.sliderIndex || "0");

  if (button === backBtn) {
    if (sliderIndex > 0) sliderIndex--;
    else sliderIndex = slideCount - visibleSlideCount;
  } else if (button === frwrdBtn) {
    if (sliderIndex < slideCount - visibleSlideCount) sliderIndex++;
    else sliderIndex = 0;
  }

  let slideWidth = slides[0].clientWidth;

  slideWrapper.style.transform = `translateX(${-(
    slideWidth * sliderIndex +
    gap * sliderIndex
  )}px)`;

  // Update the sliderIndex for the current section
  sections[sectionIndex].dataset.sliderIndex = sliderIndex;
};

// Vendor slider
const vendorSlides = document.querySelectorAll(".vendor-section .slide");
const vendorSlideWrapper = document.querySelector(
  ".vendor-section .slide-wrapper"
);

// Set initial slide index and direction
let currentSlideIndex = 0;
let direction = 1; // 1 for forward, -1 for backward

const moveVendorSlides = () => {
  let slideWidth = vendorSlides[0].clientWidth;

  vendorSlideWrapper.style.transform = `translateX(${-(
    slideWidth * currentSlideIndex +
    110 * currentSlideIndex
  )}px)`;

  // Update current slide index based on direction
  currentSlideIndex += direction;

  // Check if reached the end or beginning of slides
  if (currentSlideIndex == vendorSlides.length - 6) {
    currentSlideIndex = vendorSlides.length - 7;
    direction = -1;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = 1;
    direction = 1;
  }
};

// Start the interval
let intervalId = setInterval(moveVendorSlides, 3000);

// Stop the interval when the mouse hovers over the slider
vendorSlideWrapper.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
});

// Resume the interval when the mouse leaves the slider
vendorSlideWrapper.addEventListener("mouseleave", () => {
  intervalId = setInterval(moveVendorSlides, 3000);
});
