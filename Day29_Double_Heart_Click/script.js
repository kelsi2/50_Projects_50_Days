const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

// Can listen for dblclick but here we are creating our own
loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if ((new Date().getTime() - clickTime) < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  // Add heart in position of click
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  // Get coordinates of click
  const x = e.clientX;
  const y = e.clientY;

  // Make sure we are inside the image when clicking
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  // Set heart styling to show based on click
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  // Increment number of times liked
  times.innerHTML = ++timesClicked;

  // Remove heart after 1 second so it doesn't stay in the DOM
  setTimeout(() => heart.remove(), 1000);
}