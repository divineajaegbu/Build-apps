// let todos = [
//     {
//         text: 'Order cat food',
//         completed: false
//     },
//     {
//         text: 'Clean kitchen',
//         completed: true
//     },
//     {
//         text: 'Buy food',
//         completed: true
//     },
//     {
//         text: 'Do work',
//         completed: false
//     },
//     {
//         text: 'Exercise',
//         completed: true
//     },
// ]


let todos = getSavedTodos()


const filters = {
    searchText: '',
    hideCompleted: false
}




renderTodos(todos, filters)
//Listen for new todo creation


// document.querySelector('#add-todo').addEventListener('click', function () {
//     console.log('Add a new todo...')
// })


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)


})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const viewText = e.target.elements.text.value.trim()

    if (viewText.length > 0) {
        todos.push({
            id: uuidv4(),
            text: viewText,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.text.value = ''

    }
})


document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)


})