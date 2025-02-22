let esther = 'female';
let abigial = 'female';

let sam = 'male'


console.log(esther == sam)
console.log(esther != sam)

console.log("### BOOLEAN COMPARISON (AND) ###")
console.log('true AND true: ' + (true && true))
console.log('true AND false: ' + (true && false))
console.log('false AND true: ' + (false && true))
console.log('false AND false: ' + (false && false))


console.log("### BOOLEAN COMPARISON (OR) ###")
console.log('true OR true: ' + (true || true))
console.log('true OR false: ' + (true || false))
console.log('false OR true: ' + (false || true))
console.log('false OR false: ' + (false || false))


const allowedAge = 18
const allowedGender = 'male'

const estherPerson = {
    gender: "Female",
    age: 15
}

const abigailPerson = {
    gender: "Female",
    age: 22
}

console.log(estherPerson.age >= allowedAge)

if (estherPerson.age >= allowedAge) {
    console.log('Esther is allowed to come in')
}

//true || false
if (
    abigailPerson.age >= allowedAge || 
    abigailPerson.gender == allowedGender
) {
    console.log('Abigail is allowed to come in')
}
