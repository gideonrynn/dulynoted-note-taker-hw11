let $noteTitle = $(".note-title");
let $noteText = $(".note-textarea");
let $saveNoteBtn = $(".save-note");
let $newNoteBtn = $(".new-note");
let $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

// A function for getting all notes from the db
let getNotes = function() {
  
};

// A function for saving a note to the db
let saveNote = function(note) {
  
};

// A function for deleting a note from the db
let deleteNote = function(title) {
  
};

// If there is an activeNote, display it, otherwise render empty inputs
let renderActiveNote = function() {
  
};

// Get the note data from the inputs, save it to the db and update the view
let handleNoteSave = function() {
  
};

// Delete the clicked note
let handleNoteDelete = function(event) {
  
};

// Sets the activeNote and displays it
let handleNoteView = function() {
  
};

// Sets the activeNote to and empty object and allows the user to enter a new note
let handleNewNoteView = function() {
  
};

// If a note's title or text are empty, hide the save button
// Or else show it
let handleRenderSaveBtn = function() {
  
};

// Render's the list of note titles
let renderNoteList = function(notes) {
  
};

// Gets notes from the db and renders them to the sidebar
let getAndRenderNotes = function() {
  
};

$saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);
$newNoteBtn.on("click", handleNewNoteView);
$noteList.on("click", ".delete-note", handleNoteDelete);
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
getAndRenderNotes();
