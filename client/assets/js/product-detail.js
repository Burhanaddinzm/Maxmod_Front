"use strict";

const shippingAccordion = document.querySelector(".shipping-return .top");
const shippingAccordionText = document.querySelector(
  ".shipping-return .bottom"
);

const variants = document.querySelectorAll(".variations label");

const slideCount = document.querySelectorAll(
  ".slider .img-container img"
).length;
const imgContainer = document.querySelector(".slider .img-container");
const backBtn = document.querySelector(".slider .slider-back");
const frwrdBtn = document.querySelector(".slider .slider-frwd");
const mobileBackBtn = document.querySelector(".mobile-slider .mobile-back");
const mobileFrwrdBtn = document.querySelector(".mobile-slider .mobile-frwd");
const mobileSlideCount = document.querySelector(".mobile-slider .slide-count");
const slides = document.querySelectorAll(
  ".product-detail-section .left-side .slider .img-container img"
);

let sliderIndex = 0;

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

const moveSlide = (event) => {
  if (slideCount === 1) return;

  const button = event.target.closest(
    ".slider-back, .slider-frwd, .mobile-back, .mobile-frwd"
  );

  if (!button) return;

  if (button === backBtn || button === mobileBackBtn) {
    if (sliderIndex > 0) sliderIndex--;
    else sliderIndex = slideCount - 4;
  } else if (button === frwrdBtn || button === mobileFrwrdBtn) {
    if (sliderIndex < slideCount - 4) sliderIndex++;
    else sliderIndex = 0;
  }

  imgContainer.style.transform = `translateX(${-(
    slides[0].clientWidth * sliderIndex +
    12 * sliderIndex
  )}px)`;
};

backBtn.addEventListener("click", (event) => moveSlide(event));
frwrdBtn.addEventListener("click", (event) => moveSlide(event));
mobileBackBtn.addEventListener("click", (event) => moveSlide(event));
mobileFrwrdBtn.addEventListener("click", (event) => moveSlide(event));

const checkSlideCount = () => {
  if (slideCount <= 4) {
    backBtn.classList.add("hidden");
    frwrdBtn.classList.add("hidden");
  }
  if (slideCount <= 2) {
    mobileBackBtn.classList.add("hidden");
    mobileFrwrdBtn.classList.add("hidden");
  }
};

if (windowWidth > 425) {
  // Restart main image animation on src change
  const mainImg = document.querySelector(
      ".product-detail-section .left-side .main-img"
    ),
    observer2 = new MutationObserver((changes) => {
      changes.forEach((change) => {
        if (change.attributeName.includes("src")) restartImgAnimation();
      });
    });

  observer2.observe(mainImg, { attributes: true });

  const restartImgAnimation = () => {
    mainImg.classList.remove("run-animation");
    setTimeout(() => mainImg.classList.add("run-animation"), 10);
  };

  // Change main image src on slide click and add "active" to slide

  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      slides.forEach((img) => {
        img.classList.remove("active");
      });

      slide.classList.add("active");
      if (mainImg.src !== slide.src) mainImg.src = slide.src;
    });
  });
}

checkSlideCount();
