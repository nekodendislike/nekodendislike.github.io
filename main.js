const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('nav');
 
btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu')
});
