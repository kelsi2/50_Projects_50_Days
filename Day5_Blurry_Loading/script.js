const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// Start loading at 0%, image blurred
let load = 0;

let int = setInterval(blurring, 30)

// Load percentage increases to 100% and image becomes less blurry
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  // Opacity only goes from 0 to 1 (in our case we start at 1 and count down to 0) so we can't use load which is going from 0 to 100
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// Map load to opacity
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}