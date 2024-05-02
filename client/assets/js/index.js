"use strict";

const sections = document.querySelectorAll("section");

// Add scroll effects to each section. Triggers on window scroll and initial load
const scrollAnimation = () => {
  sections.forEach((section) => {
    const triggerPoint = window.innerHeight * 0.8;
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

// Add slider functionality to each section.
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
  if (slideCount === 1) return;

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

sections.forEach((section, index) => {
  const slider = section.querySelector(".slider");
  if (!slider) return;
  const slideCount = slider.querySelectorAll(".slide").length;
  const slideWrapper = slider.querySelector(".slide-wrapper");
  const slides = slider.querySelectorAll(".slide");
  const backBtn = slider.querySelector(".slider-back");
  const frwrdBtn = slider.querySelector(".slider-frwd");

  if (section.classList.contains("shop-by-category-section")) {
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
});
