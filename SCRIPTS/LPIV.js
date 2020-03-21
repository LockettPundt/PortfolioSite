const anchor = document.getElementById('anchor1');

const arrows = document.querySelectorAll('#scrollArrow');

arrows.forEach((item) => item.addEventListener('click', (e) => {
  e.preventDefault();
  anchor.scrollIntoView(true);
}));
