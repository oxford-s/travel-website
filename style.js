"use strict";

// ! .................... preloder ...........................
const preloder = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloder.classList.add("remove");
});

// ! ....................add event on classes...................................
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// !......................navbar toogler on mobile......................

const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelectorAll(".nav-toggle-btn");
const overlay = document.querySelector(".overlay");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navbarToggler, "click", toggleNav);

// !header sticky

const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  header.classList[this.window.scrollY > 100 ? "add" : "remove"]("active");
});
