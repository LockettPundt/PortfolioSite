'use strict'
const downArrow = document.getElementById("downArrow");
// downArrow.addEventListener('click', (e) => {
//     alert('HI');
// })
downArrow.addEventListener('click', e => {
    let target = document.getElementById("targetScroll");
    target.scrollIntoView({behavior: 'smooth'})
});