"use strict";

const menuButton = document.querySelector("#toggle");
const menuOff = document.querySelector("#toggleOff");

const navigation = document.querySelector(".navlinks");

const closeNavLinks = document.querySelectorAll("li");

menuButton.addEventListener("click", function () {
  navigation.style.display = "block";
  navigation.style.transition = "display 1s ease 200ms";
  menuButton.style.display = "none";
  menuOff.style.display = "block";
  console.log("Menu displayed!");
});

menuOff.addEventListener("click", function () {
  menuButton.style.display = "block";
  navigation.style.display = "none";
  menuOff.style.display = "none";
});

for (let i = 0; i < closeNavLinks.length; i++) {
  closeNavLinks[i].addEventListener("click", function () {
    navigation.style.display = "none";
    console.log("Menu hidden!");
  });
}

let showMore = document.querySelector("#show-more");
let otherParagraph = document.querySelectorAll(".hide-p");

function pShower() {
  for (let i = 0; i < otherParagraph.length; i++) {
    otherParagraph[i].style.display = "block";
    showMore.style.display = "none";
  }
}

showMore.addEventListener("click", pShower);

let showLess = document.querySelector("#show-less");

function pHider() {
  for (let i = 0; i < otherParagraph.length; i++) {
    otherParagraph[i].style.display = "none";
    showMore.style.display = "block";
  }
}
showLess.addEventListener("click", pHider);

let previewPic = document.querySelectorAll(".pic");
let modalView = document.querySelector("#modal");
let overlayView = document.querySelector("#overlay");

let carPreview = document.querySelector("#carPreview");

let closeModal = document.querySelector("#closeModal");

for (let i = 0; i < previewPic.length; i++) {
  previewPic[i].addEventListener("click", function () {
    overlayView.style.display = "block";
    modalView.style.display = "block";
    carPreview.setAttribute("src", `images/car${i + 1}.png`);
    console.log(`Clicked Pic${i + 1}`);
  });
}

closeModal.addEventListener("click", function () {
  overlayView.style.display = "none";
  modalView.style.display = "none";
});
