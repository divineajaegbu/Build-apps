
const now = moment()
console.log(now.fromNow())
console.log(now.toString())
now.minutes(1)
console.log(now.format('MMM Do,YYYY')) //Jan 1st,2022
console.log(now.toString())
// now.year(1)
// console.log(now.toString())
now.add(1, 'year')
console.log(now.toString())
now.add(1, 'year').subtract(20, 'days')
console.log(now.toString())

console.log(now.format('MMM Do,YYYY')) //Jan 11th,2024
console.log(now.format())

console.log(now.fromNow())

const timeStamp = now.valueOf()
console.log(moment(timeStamp).toString())
console.log(timeStamp)


//Challenge area

const challengeNow = moment()

challengeNow.year(1991).month(0).date(6)

console.log(challengeNow.format('MMM Do, YYYY'))

console.log(challengeNow.format('[Jan 6th, 1991]'))