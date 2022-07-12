class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
        this.puzzleEl = document.querySelector('#puzzle')
        this.guessesEl = document.querySelector("#guesses")
    }


    calculateStatus() {
        const finished = this.word.every(letter => this.guessedLetters.includes(letter))

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    getStatusMessage() {
        if (this.status === 'playing') {
            return `Guesses Left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! the word was ${this.word.join('')}.`
        } else {
            return `Great work! you guessed the work.`
        }
    }

    getPuzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === '') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)


        if (this.status !== 'playing') {
            return
        }


        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }


        this.calculateStatus()
    }


    windowKeypress() {
        window.addEventListener('keypress', (e) => {
            const guess = String.fromCharCode(e.charCode)
            this.makeGuess(guess)
            this.puzzleEl.textContent = this.getPuzzle()
            this.guessesEl.textContent = this.getStatusMessage()

        })
    }
}



















// const Hangman = function (word, remainingGuesses) {
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = []
//     this.status = 'playing'
// }

// Hangman.prototype.calculateStatus = function () {

//     const finished = this.word.every(letter => this.guessedLetters.includes(letter))


//     // this.word.forEach((letter) => {
//     //     if (this.guessedLetters.includes(letter)) {

//     //     } else {
//     //         finished = false
//     //     }
//     // // })

//     // const letterUnguessed = this.word.filter((letter) => {
//     //     return !this.guessedLetters.includes(letter)
//     // })

//     // const finished = letterUnguessed.length === 0

//     if (this.remainingGuesses === 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }
// }


// Hangman.prototype.getStatusMessage = function () {
//     if (this.status === 'playing') {
//         return `Guesses Left: ${this.remainingGuesses}`
//     } else if (this.status === 'failed') {
//         return `Nice try! the word was ${this.word.join('')}.`
//     } else {
//         return `Great work! you guessed the work.`
//     }
// }

// Hangman.prototype.getPuzzle = function () {
//     let puzzle = ''

//     this.word.forEach((letter) => {
//         if (this.guessedLetters.includes(letter) || letter === '') {
//             puzzle += letter
//         } else {
//             puzzle += '*'
//         }
//     })

//     return puzzle
// }


// Hangman.prototype.makeGuess = function (guess) {
//     guess = guess.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(guess)
//     const isBadGuess = !this.word.includes(guess)


//     if (this.status !== 'playing') {
//         return
//     }


//     if (isUnique) {
//         this.guessedLetters.push(guess)
//     }

//     if (isUnique && isBadGuess) {
//         this.remainingGuesses--
//     }


//     this.calculateStatus()
// }




