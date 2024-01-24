"use strict";

const ratingEl = document.querySelectorAll(".rating-num");
const finalRatingEl = document.querySelector(".rating");
const btnSubmit = document.querySelector(".btn");
const ratingConatinerEl = document.querySelector(".container--rating");
const thankYouConatinerEl = document.querySelector(".container--thankyou");

// Mouse hover over rating numbers
ratingEl.forEach(function (num, i) {
  num.addEventListener("mouseover", function () {
    ratingEl[i].classList.add("main-hover");
    if (ratingEl[i + 1]) ratingEl[i + 1].classList.add("side-hover");
    if (ratingEl[i - 1]) ratingEl[i - 1].classList.add("side-hover");
  });

  num.addEventListener("mouseout", function () {
    ratingEl[i].classList.remove("main-hover");
    if (ratingEl[i + 1]) ratingEl[i + 1].classList.toggle("side-hover");
    if (ratingEl[i - 1]) ratingEl[i - 1].classList.toggle("side-hover");
  });
});

// Submit Rating
let ratingNumber;

ratingEl.forEach(function (element, i) {
  element.addEventListener("click", function () {
    ratingNumber = element.textContent;
    element.classList.add("click-color");
  });
});

// Display rating
btnSubmit.addEventListener("click", function () {
  if (ratingNumber) {
    finalRatingEl.textContent = `You selected ${ratingNumber} out of 5`;
  } else {
    finalRatingEl.textContent = `Select the appropriate rating`;
  }

  ratingConatinerEl.classList.toggle("hidden");
  thankYouConatinerEl.classList.toggle("hidden");
  ratingEl.classList.remove("click-color");
});

// Revert back to rating option
thankYouConatinerEl.addEventListener("click", function () {
  ratingConatinerEl.classList.toggle("hidden");
  thankYouConatinerEl.classList.toggle("hidden");

  ratingEl.forEach(function (element, i) {
    element.classList.remove("click-color");
  });
});
