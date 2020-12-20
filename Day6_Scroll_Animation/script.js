const boxes = document.querySelectorAll('.box');

// Detect when the window is scrolled
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  // Set trigger point for boxes to scroll in
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    // Where in the viewport is the item at each point (top, bottom, left, etc.)
    // Retrieve the location of the top of the box
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}