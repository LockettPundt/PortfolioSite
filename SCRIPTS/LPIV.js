const anchor = document.getElementById('anchor1');

const arrows = document.querySelectorAll('#scrollArrow');

arrows.forEach((item) => {
  return item.addEventListener('click', (e) => {
    e.preventDefault();
    anchor.scrollIntoView(true);
  })
});