const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

// get notes from localStorage or empty array
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// show saved notes on page load
notes.forEach(note => {
    const noteEl = createNoteEl(note.id, note.content);
    containerEl.insertBefore(noteEl, btnEl);
});

// create textarea note
function createNoteEl(id, content) {
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    // save when typing
    element.addEventListener("input", () => {
        updateNote(id, element.value);
    });

    // delete on double click
    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?");
        if (warning) {
            deleteNote(id, element);
        }
    });

    return element;
}

// add new note
function addNote() {
    const noteObj = {
        id: Math.floor(Math.random() * 1000000),
        content: "",
    };

    notes.push(noteObj);
    saveNotes();

    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    containerEl.insertBefore(noteEl, btnEl);
}

// delete note
function deleteNote(id, element) {
    notes = notes.filter(note => note.id !== id);
    saveNotes();
    containerEl.removeChild(element);
}

// update note content
function updateNote(id, content) {
    const note = notes.find(note => note.id === id);
    if (note) {
        note.content = content;
        saveNotes();
    }
}

// save notes to localStorage
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

btnEl.addEventListener("click", addNote);
