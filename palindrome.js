// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
const reversedString= str.split('').reverse().join('')

    if (str === reversedString)  return console.log(true)

    return console.log(false)

}

//! Hur det löstes i kursen
// function palindrome(str) {
//     const reversedString= str.split('').reverse().join('')
//         return reversedString === str
    
// }

//! Alternativa lösningar
//* Denna gör en onödig koll av alla bokstäver igen. Inte den bästa lösningen
// function palindrome(str) {
//     return str.split('').every((char, i)=>{
//          return char === str[str.length - i -1]
//      })
//  }

const stringPal='abba'
const stringNonPal ='klänning'
palindrome(stringPal)
//palindrome(stringNonPal)


