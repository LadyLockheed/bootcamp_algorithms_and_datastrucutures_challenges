// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//Tips:
//modulo = %
// 9 % 3 = 0
// 3 går i 9 exakt 3 gånger och det blir ingen siffra över.
// 10 % 3 = 1
// 12 % 3 = 0
// 2 % 3 = 2
// 12 % 3 === 0 // true, eftersom 3 går i 12 fyra gånger och det blir ingen siffra över.

//! Min lösning
function fizzBuzz(n) {

    let number= 1;

    for ( let i= 0; i < n; i++) {
        
        //Här kan man också skriva number % 15 === 0
        if(number % 3 === 0  && number % 5 === 0){
            console.log(number, 'fizzbuzz')
        }
        else if (number % 3 === 0) {
            console.log(number, 'fizz')
        }
        else if ( number % 5 === 0) {
            console.log(number, 'buzz')
        }
        else {
            console.log(number)
        }
        number++
    }
}

//! Udemys lösning
function fizzBuzz(n) {

    for (let i = 1; i <= n; i++){
        // Check if multiple of 3 and 5?
        if (i % 3 == 0 && i % 5 === 0) {
            console.log('fizzbuss')
        }
        else if (i % 3 === 0) {
            //is the number a multiple of 3?
            console.log('fizz')
        }
        else if (i % 5 === 0) {
            //is the number a multiple of 3?
            console.log('buzz')
        }
        else {
            console.log(i)
        }
    }

}

fizzBuzz(15)