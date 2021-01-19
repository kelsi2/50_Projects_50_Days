const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  // Convert to number with +
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  // Get width of label and range
  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  // Get number rather than string with pixels for width (remove 2 characters for px)
  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  // Retrieve min and max of range
  const max = +e.target.max;
  const min = +e.target.min;

  // Get distance left (originally 110px which is the center of the range)
  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  // Set label to match whatever value the slider is currently at
  label.innerHTML = value;
})

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}