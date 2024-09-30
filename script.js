'use strict';

const menu = document.querySelector(".nav-bar__menu");
const openMenuIcon = document.querySelector(".nav-bar__menu-icon");
const closeMenuIcon = document.querySelector(".nav-bar__menu-items__close-icon");

openMenuIcon.addEventListener("click", toggleHidden);
closeMenuIcon.addEventListener("click", toggleHidden);

function toggleHidden() {
    menu.classList.toggle("hidden");
}



