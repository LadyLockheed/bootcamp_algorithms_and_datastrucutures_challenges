// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//size syftar på antalet element i varje array, inte antalet arrays.

//! Min lösning
// function chunk (array, size){
//     let outerArray = []
//     let chunk = []

//     array.forEach((el)=>{

//         if(chunk.length === size){
//             outerArray.push(chunk)
//             chunk=[]
//         }
        
//         chunk.push(el)
        
//     })

//     //Den här pushen måste vara med för att få med den sista chunken till outerarray. 
//     outerArray.push(chunk)
//     console.log(outerArray)
//     return outerArray
// }

//! Udemys lösning #1
// function chunk(array, size) {
//     const chunked = []
//     for (let element of array){
//         const last = chunked[chunked.length-1]

//         if ( !last || last.length === size) {
//             chunked.push
//         }
//         else {
//             last.push(element)
//         }
//     }

//     return chunked

// }

//! Udemys lösning #2

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {

       chunked.push(array.slice(index, index+size))
       index += size
    }
    console.log(chunked)
    return chunked

}


chunk([1, 2, 3, 4, 5], 2)