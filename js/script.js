const addButton = document.querySelector('.add');
const notesContainer = document.querySelector('.notes-container');

showData();

addButton.addEventListener('click', () => {
    const note = document.createElement('div');
    note.setAttribute('contenteditable', 'true');
    note.classList.add('note');
    const deleteButton = document.createElement('img');
    deleteButton.src = 'img/delete.png';
    note.appendChild(deleteButton);
    notesContainer.appendChild(note);
    saveData();
});

notesContainer.addEventListener('click', (element) => {
    if (element.target.tagName === 'IMG') {
        element.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem('noteInfo', notesContainer.innerHTML);
}

function showData() {
    notesContainer.innerHTML = localStorage.getItem('noteInfo');
}

localStorage.clear();