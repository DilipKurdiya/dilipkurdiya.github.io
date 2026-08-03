const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
  menu.textContent = open ? 'Close' : 'Menu';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Menu';
}));
