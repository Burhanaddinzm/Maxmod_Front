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
