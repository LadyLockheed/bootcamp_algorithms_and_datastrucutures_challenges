// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


//! Min lösning
// function reverseInt(n) {
//     let reversed= n.toString().split('').reverse()

//     if (Math.sign(n) === -1) {
//         reversed.unshift('-')
//         reversed.pop()
//     }

//     let fromArrayToString = reversed.join('')
//     let fromStringToNumber = Number(fromArrayToString)
//     console.log(fromStringToNumber)

//     return fromStringToNumber
// }

//! Udemys lösning
function reverseInt(n) {
    const reversed =n.toString().split('').reverse().join('')

    if(n < 0) return parseInt(reversed) * -1
    
    return parseInt(reversed)
}

reverseInt(-90)

//! Udemys lösning

// function reverseInt(n){


// }

