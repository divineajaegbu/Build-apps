
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()

let note = notes.find(function (note) {
    return note.id === noteId
})


if (note === undefined) {
    location.assign('../html/index.html')
}


titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updateAt)


titleElement.addEventListener('input', e => {
    note.title = e.target.value
    note.updateAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updateAt)
    saveNotes(notes)
})


bodyElement.addEventListener('input', e => {
    note.body = e.target.value
    note.updateAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updateAt)
    saveNotes(notes)
})


removeElement.addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    dateElement.textContent = generateLastEdited(note.updateAt)
    location.assign('../html/index.html')
})


window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id
        })


        if (note === undefined) {
            location.assign('../html/index.html')
        }


        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updateAt)

    }
})


