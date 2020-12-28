const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // Get coordinates of button click within the viewport
    const x = e.clientX;
    const y = e.clientY;

    // Get position of button
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // Where in the button is the click happening (instead of the whole viewport)?
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // Create circle when click happens
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    // Remove circle from the dom so it doesn't permanently get added
    setTimeout(() => circle.remove(), 500);
  })
});