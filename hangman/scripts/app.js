

//call class


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector("#guesses")
const resetBtn = document.querySelector("#reset")

let hangman;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    hangman.makeGuess(guess)
    render()

})



//integrating app applications(Asynchronous)

const render = () => {
    // puzzleEl.textContent = hangman.puzzle
    puzzleEl.innerHTML = ''
    guessesEl.textContent = hangman.statusMessage

    hangman.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')

        letterEl.textContent = letter

        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzleFetch()
    hangman = new Hangman(puzzle.puzzle, 5)

    console.log("hangman:", hangman.puzzle)

    render()
}

resetBtn.addEventListener('click', startGame)

startGame()



