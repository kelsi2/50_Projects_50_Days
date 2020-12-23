const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    // Set input field to nothing, then select a new value from the tags randomly
    setTimeout(() => {
      e.target.value = '';
    }, 10)

    randomSelect();
  }
})

function createTags(input) {
  // If not an empty string map the value to a new array and remove any white space
  const tags = input
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

  // Clear before inserting anything
  tagsEl.innerHTML = '';

  // Create a new span with class of tag and set the inner text to whatever has been entered, then add it to the tagsEl
  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  })
}

function randomSelect() {
  // How many times it will highlight the values before stopping
  const times = 30;

  // Highlight randomtags every 100ms
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // Stop on a randomtag and stay highlighted
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);

  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');

  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}