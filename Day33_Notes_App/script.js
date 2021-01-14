const addBtn = document.getElementById('add');

// Retrieve notes from local storage
const notes = JSON.parse(localStorage.getItem('notes'));

// Display saved notes in DOM
if (notes) {
  notes.forEach(note => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote())

// Add an empty note, if there is text passed in hide the text area
function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
  <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
  `

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener('click', () => {
    note.remove();

    // Remove from localStorage
    updateLS();
  })

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  })

  textArea.addEventListener('input', (e) => {
    const {value} = e.target;

    main.innerHTML = marked(value);

    // Add to localStorage
    updateLS();
  })

  document.body.appendChild(note);
}

// LocalStorage is basically key value pairs which can be retrieved the same way we get and set in OOP
// Can only store strings in localStorage, not objects or arrays, need to stringify
// localStorage.setItem('name', JSON.stringify([1, 2, 3]));
// JSON.parse(localStorage.getItem('name'));
// localStorage.removeItem('name');

function updateLS() {
  const notesText = document.querySelectorAll('textarea');

  const notes = [];

  // Each array index will be one note
  notesText.forEach(note => notes.push(note.value));

  // Add notes array to localStorage
  localStorage.setItem('notes', JSON.stringify(notes));
}