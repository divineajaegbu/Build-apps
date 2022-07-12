// const puzzleEl = document.querySelector('#puzzle')
// const guessesEl = document.querySelector("#guesses")

const game1 = new Hangman('Cat', 2)


game1.puzzleEl.textContent = game1.getPuzzle()
game1.guessesEl.textContent = game1.getStatusMessage()

game1.windowKeypress()

// window.addEventListener('keypress', function (e) {
//     const guess = String.fromCharCode(e.charCode)
//     this.makeGuess(guess)
//     puzzleEl.textContent = this.getPuzzle()
//     guessesEl.textContent = this.getStatusMessage()

// })
