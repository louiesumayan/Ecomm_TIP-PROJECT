const hamburger = document.querySelector('.hamburger');
const nav_menuEl = document.querySelector('.nav_menu_list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav_menuEl.classList.toggle('active');
});

document.querySelectorAll('.nav_links').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav_menuEl.classList.remove('active');
  })
);
