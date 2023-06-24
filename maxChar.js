// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//! My solution
function maxChar(str) {
    const arr = Array.from(str)
    const map1 = new Map()

    //Mappes through all element and pairs them with a value
    arr.map((letter)=> {

        //Count how many times the letter exists in the array
        let countChar = arr.filter((char) => char === letter)
        map1.set(countChar.length, letter)
    })
    
    const keys=map1.keys()
    const highestNumber=Math.max(...keys)
    const maxChar= map1.get(highestNumber)

    //This line is an example of how you can make a oneliner of the three above
    const answerOneLine= map1.get(Math.max(...map1.keys()))

    console.log(maxChar)
    return maxChar

}

//! Udemys lösning
function maxChar(str) {
    const charMap = {}
    let max = 0;
    let maxChar = '';

    //Looping through an array with help of OF
    for ( let char of str ) {
        //char == 0
        //charmMap[0] == H
        if( charMap[char] ) {
            charMap[char]++;
        }
        else {
            charMap[char] = 1;
        }
    }

    //*Looping through an object with the help of IN
    //* char is assigned the keys in the object we are looping through
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        } 
    }
    return maxChar
}

console.log(maxChar('Hello There'))
