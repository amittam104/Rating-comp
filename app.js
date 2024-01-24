"use strict";

const ratingEl = document.querySelectorAll(".rating-num");
const finalRatingEl = document.querySelector(".rating");
const btnSubmit = document.querySelector(".btn");

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

ratingEl.forEach(function (element, i) {
  element.addEventListener("click", function () {
    let ratingNumber = element.textContent;
    btnSubmit.addEventListener("click", function () {
      console.log(`You selected ${ratingNumber} out of 5`);
      finalRatingEl.textContent = `You selected ${i + 1} out of 5`;
    });
  });
});
