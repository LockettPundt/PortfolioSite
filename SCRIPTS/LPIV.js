'use strict'

const anchor = document.getElementById("anchor1");

const arrows = document.querySelectorAll("#scrollArrow");

arrows[0].addEventListener("click", e => {
    e.preventDefault();
    anchor.scrollIntoView(true)
});

arrows[1].addEventListener("click", e => {
    e.preventDefault();
    anchor.scrollIntoView(true)
});