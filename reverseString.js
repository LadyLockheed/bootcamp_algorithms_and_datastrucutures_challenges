// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//! Hur Udemy löste det
let string= 'apple'
function reverse(str) {
    let reversed = str.split('').reverse().join('')
    return reversed

}

//! Alternativ lösning med for loop original
// function reverse(str) {
//  let reversedString=''
   
//     for (let i=str.length-1; i >= 0; i--){

//       reversedString = reversedString + str[i]
//     }
// }

//! Alternativ lösning med for loop annan variant
// function reverse(str) {
//     let reversed='';

//     for (let character of str) {
  
//         reversed= character+reversed
//     }
//     console.log(reversed)
//     return reversed

// }

//! Alternativ lösning med reverse
// function reverse(str){
//     let arr=str.split('').reduce((reversed, character)=>{
//         return character+reversed
//     }, '')

//     console.log(arr)
//     return arr

// }

reverse('apple')

//! Lek med reducer
function testReducer(str){

    let arr=str.split('').reduce((sum, single)=>{
        
        if(single==='j'){
            
            return sum
        }
        else {
           
            return sum+single
        }
    }, '')
   
    console.log(arr)
    return arr
}

testReducer('hejsan')