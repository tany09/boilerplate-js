
import otherScream from './scream.js'

console.log(otherScream('me'));
// console.log('change hoja');
console.log('chal gya')

const person = {
    name: 'tany',
    age: 23
}

const locaton = {
    city: 'Rampur',
    country: 'India'
}

const overview = {
    ...person,
    ...locaton
}

console.log(overview)