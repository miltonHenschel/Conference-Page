/* MOBILE MENU */
const homeBtn = document.getElementById('home-btn');
const closeBtn = document.getElementById('close-btn');
const navBar = document.getElementById('nav-bar-ul');
const main = document.getElementById('main');
const intro = document.getElementById('intro');
const navBarBlock = document.getElementById('nav-bar');
const navBarList = document.querySelectorAll('.nav-bar-list');

homeBtn.addEventListener('click', () => {
  navBar.style.display = 'flex';
  homeBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  main.style.display = 'none';
  intro.style.display = 'none';
  navBarBlock.style.height = '100vh';
});

function closeMenu() {
  navBar.style.display = 'none';
  homeBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  main.style.display = 'block';
  intro.style.display = 'block';
  navBarBlock.style.height = 'auto';
}

closeBtn.addEventListener('click', closeMenu);
navBarList.forEach((e) => {
  e.addEventListener('click', closeMenu);
});
