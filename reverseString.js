// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//! Udemys solution
let string= 'apple'
function reverse(str) {
    let reversed = str.split('').reverse().join('')
    return reversed

}

//! Alternative solution with for loop original
// function reverse(str) {
//  let reversedString=''
   
//     for (let i=str.length-1; i >= 0; i--){

//       reversedString = reversedString + str[i]
//     }
// }

//! Alternativ solution with another kind of for loop
// function reverse(str) {
//     let reversed='';

//     for (let character of str) {
  
//         reversed= character+reversed
//     }
//     console.log(reversed)
//     return reversed

// }

//! Alternative solution with reverse
// function reverse(str){
//     let arr=str.split('').reduce((reversed, character)=>{
//         return character+reversed
//     }, '')

//     console.log(arr)
//     return arr

// }

reverse('apple')

//! Trying out reducer for fun
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