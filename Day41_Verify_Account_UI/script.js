const codes = document.querySelectorAll('.code');

// Put cursor in the first box when we load the page
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      // Need to use settimeout so codes[0] doesn't hop to next idx
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  })
})