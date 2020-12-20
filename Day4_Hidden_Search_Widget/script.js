const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  // Toggle turns class on and off when clicked, rather than needing to remove it (boolean)
  search.classList.toggle('active');
  // Automatically focus on the input field
  input.focus();
});