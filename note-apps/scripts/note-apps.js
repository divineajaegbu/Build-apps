// let notes = [
//     {
//         title: 'my next trip',
//         body: 'I would like to go to Spain',
//     },
//     {
//         title: 'Habbits to work on',
//         body: 'Exercise, Eating a bit better',
//     },
//     {
//         title: 'Office modification',
//         body: 'Get a new seat',
//     },
// ]


let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}



// localStorage.removeItem('location')
// localStorage.clear()


renderNotes(notes, filters)

document.querySelector('.create-note').addEventListener('click', function () {
    const id = uuidv4()
    const timeStamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createAt: timeStamp,
        updateAt: timeStamp
    })
    saveNotes(notes)
    // renderNotes(notes, filters)
    location.assign(`../html/edit.html#${id}`)

})


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)

})


document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})


window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})




