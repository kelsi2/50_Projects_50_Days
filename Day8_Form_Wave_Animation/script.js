const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  // 1. Create an array of letters in the label using split
  // 2. Map over the letters to create an individual span for each letter
  // 3. Join back together to create the label string
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
    .join('');
})