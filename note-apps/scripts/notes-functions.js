'use strict'

//Read existing notes from localStorage

const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//Save the notes to localStorage

const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}


//Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

//Generate the DOM structure for a note

const generateNoteDOM = function (note) {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // const button = document.createElement('button')

    // //Setup the remove button

    // button.textContent = 'x'

    // button.addEventListener('click', function () {
    //     removeNote(note.id)
    //     saveNotes(notes)
    //     renderNotes(notes, filters)

    // })
    //Setup the note title text

    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'

    }

    textEl.classList.add('list-item__title')
    // noteEl.appendChild(button)
    noteEl.appendChild(textEl)

    // Setup the link
    noteEl.setAttribute('href', '../html/edit.html')
    statusEl.classList.add('list-item__subtitle')
    noteEl.classList.add('list-item')

    // Setup the message
    statusEl.textContent = generateLastEdited(notes.updateAt)
    noteEl.appendChild(statusEl)
    return noteEl
}

// sort you notes by one of three ways

const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updateAt > b.updateAt) {
                return -1
            } else if (a.updateAt < b.updateAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

//Render applications notes

const renderNotes = function (notes, filters) {
    const noteEls = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy)
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    noteEls.innerHTML = ''

    if (filterNotes.length > 0) {
        filterNotes.forEach(function (note) {
            const noteEl = generateNoteDOM(note)
            noteEls.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        noteEls.appendChild(emptyMessage)
    }

}

//Generate the last edited message

const generateLastEdited = function (timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}


