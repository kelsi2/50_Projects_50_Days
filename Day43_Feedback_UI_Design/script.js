const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

// Event bubbling: Setting event listener on parent element, not the button itself but the button is still aware of the event because it is a child of panel
ratingsContainer.addEventListener('click', (e) => {
  // Check for rating on the parent class, the box surrounding the image, not the image itself
  if (e.target.parentNode.classList.contains('rating') || e.target.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
})

sendBtn.addEventListener('click', (e) => {
  // This will cause an error because panel innerHTML has completely changed so it doesn't know what to look for
  // Change above function to listen to ratingsContainer rather than panel so error is cleared
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br/>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `
})

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}