'use strict'

console.log("-------------------------------Class Hangman Game")

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
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

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses Left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! the word was ${this.word.join('')}.`
        } else {
            return `Great work! you guessed the work.`
        }
    }

    get puzzle() {
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




}


// Inheritance

class Students extends Hangman {
    constructor(word, remainingGuess, age, position) {
        super(word, remainingGuess)
        this.age = age
        this.position = position
        this.divEl = document.querySelectorAll('div')[0]
        this.divEl2 = document.querySelectorAll('div')[1]
    }

    get calculateStatus() {
        return this.status.toUpperCase()
    }

    set calculateStatus(views) {
        if ((this.age >= this.position)) {
            this.status = `${views} is passing the post`
        } else if ((this.position <= this.age)) {
            this.status = `${this.word} is failing the post`
        } else {
            this.status = 'This is the both passing and failing post.'
        }
    }


    upDateGrade() {
        if ((this.age >= this.remainingGuess)) {
            this.position--
        } if ((this.remainingGuess >= this.age)) {
            this.position++
        } else {
            return 'nothing'
        }

        return this.position
    }
}




const student = new Students('Divine', 20, 19, 5)

student.calculateStatus = 'Divine is passing the position'
console.log(student.calculateStatus)
student.upDateGrade()














console.log("-----------------------------Request")

function getAnswer(error, puzzle) {
    if ((!!puzzle)) {
        console.log(puzzle)
    } else if ((!!error)) {
        console.log(`Error: ${error}`)
    }
}

getPuzzle(getAnswer)


function referenceFn(name, puzzle) {
    if ((!!puzzle)) {
        console.log(puzzle)
    } else if ((!!name)) {
        console.log(`Error: ${name}`)
    }
}


countryFn(referenceFn)


getCountry('US', (error, country) => {
    if (error) {
        console.log(console.error)
    } else {
        console.log(`Country name:${country.name}`)
    }
})


console.log("Synchronous")











//Synchronous
// const myPuzzle = getPuzzleSync()

// console.log(myPuzzle)


// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
//     if ((e.target.readyState === 4 && e.target.status === 200)) {
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//         console.log(e.target)
//     } else if ((e.target.readyState === 4)) {
//         console.log("An error has taken place")
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle')
// request.send()

//https://puzzle.mead.io/puzzle?wordCount=2

//for status
//https://httpstatus.com/
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

//restcountries
//https://countrylayer.com/documentation/


// console.log("----------------------------Challenge area")

// const request1 = new XMLHttpRequest()


// request1.addEventListener('readystatechange', e => {
//     if ((e.target.readyState === 4 && e.target.timeout === 0)) {
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     } else if ((e.target.readyState === 4)) {
//         console.log("It is me")
//     }

// })


// request1.open('GET', "http://puzzle.mead.io/puzzle")
// request1.send()


// console.log("---------------------------Andrew Mead")

// const countryCode = 'US'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readyStateChange', e => {
//     if ((e.target.readyState === 4 && e.target.status === 200)) {
//         const datas = JSON.parse(e.target.responseText)
//         const countrys = datas.find((country) => country.alph2Code === countryCode)
//         console.log(countrys.name)
//     } else if ((e.target.readyState === 4)) {
//         console.log("Unable to fetch data")
//     }
// })


// countryRequest.open('GET', 'http://puzzle.mead.io/puzzle')
// countryRequest.send()
















console.log("-----------------------------------fetch")

fetch("http://puzzle.mead.io/puzzle").then((response) => {
    if ((response.status == 200)) {
        return response.json()
    } else {
        throw new Error("Unable to locate the URL")
    }
}).then((data) => {
    console.log(data.puzzle)
}).catch((err) => {
    console.log(err)
})


const fetchAdd = fetch("http://puzzle.mead.io/puzzle")


const addFn = fetchAdd.then((response) => {
    if ((response.status === 200)) {
        return response.json()
    } else {
        return "An error occured"
    }
})


addFn.then((data) => {
    console.log(data.puzzle)
}).catch((err) => {
    console.log(err)
})


//call function from request

// getPuzzleFetch().then((data) => {
//     console.log("gamePuzzle:", data.puzzle)
// }).catch((err) => {
//     console.log(err)
// })





