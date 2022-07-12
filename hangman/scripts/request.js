const getPuzzle = (callBack) => {

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if ((e.target.readyState === 4 && e.target.status === 200)) {
            const data = JSON.parse(e.target.responseText)
            callBack(undefined, data.puzzle)
        } else if ((e.target.readyState === 4)) {
            callBack("Am error has taken place", undefined)

            // console.log("An error has taken place")
        }

    })

    request.open('GET', 'http://puzzle.mead.io/puzzle')
    request.send()
}


console.log("-----------------------------Synchronous")

const getPuzzleSync = () => {

    const request = new XMLHttpRequest()


    request.open('GET', 'http://puzzle.mead.io/puzzle', false)
    request.send()

    if ((request.readyState === 4 && request.status === 200)) {
        const data = JSON.parse(request.responseText)
        return data.puzzle
    } else if ((request.readyState === 4)) {
        throw new Error("This is an error")
    }
}


function countryFn(callBackFn) {
    const countryRequest = new XMLHttpRequest()
    // const countryCode = 'US'

    countryRequest.addEventListener('readystatechange', e => {
        if ((e.target.readyState === 4 && e.target.status === 200)) {
            const viewData = JSON.parse(e.target.responseText)
            callBackFn(undefined, viewData.puzzle)
            // const findData = viewData.find(function (findDatas) {
            //     callBackFn(undefined, findDatas.aplha2Code === countryCode)
            // })
            // return findData.name
        } else if ((e.target.readyState === 4)) {
            callBackFn("An error occurred", undefined)
        }
    })


    countryRequest.open('GET', "http://puzzle.mead.io/puzzle")
    countryRequest.send()
}


const getCountry = (countryCode, callback) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readyStateChange', e => {
        if (e.target.readyState === 4 & e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)

            callback(undefined, country)
        } else if (e.target.readyState === 4) {
            callback('Unable to fetch data')
        }
    })

    countryRequest.open('GET', 'http://puzzle.mead.io/puzzle')
    countryRequest.send()
}



console.log("----------------------------------------fetch")

const getPuzzleFetch = () => {
    return fetch(`http://puzzle.mead.io/puzzle`).then((response) => {
        if ((response.status === 200)) {
            return response.json()
        } else {
            throw new Error("Error occured.")
        }
    })
}



//Challenge area

function challengeAreaFetch() {

    const insertFetch = fetch('http://puzzle.mead.io/puzzle')

    return insertFetch.then((response) => {
        console.log(response)
        if ((response.status === 200)) {
            return response.json()
        } else {
            throw new Error("Error occured")
        }

    })
    // return insertFetch
}


challengeAreaFetch().then((data) => {
    console.log(data.puzzle)
}).catch((err) => {
    console.log(err)
})







