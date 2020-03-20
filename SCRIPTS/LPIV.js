'use strict'

const downArrow = document.getElementById("scrollArrow")
const anchor = document.getElementById("anchor1");
downArrow.addEventListener("click", e => {
    e.preventDefault();
    anchor.scrollIntoView(true)
});