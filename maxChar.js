// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//! Min lösning
function maxChar(str) {
    const arr = Array.from(str)
    const map1 = new Map()

    //Mappar igenom alla element och parar ihop dom med ett value
    arr.map((el)=> {
        //Går igenom listan och kollar hur många gånger elementet finns med
        let countChar = arr.filter((x) => x === el)
        map1.set(countChar.length, el)
    })
    
    const keys=map1.keys()
    const highestNumber=Math.max(...keys)
    const maxCharIs= map1.get(highestNumber)

    //Den här koden är samma som de tre ovan, bara att den är skriven på en rad.
    const answerOneLine= map1.get(Math.max(...map1.keys()))

    console.log(answerOneLine)
    return maxCharIs

}

//! Udemys lösning
function maxChar(str) {
    const charMap = {}
    let max = 0;
    let maxChar = '';

    //*Loopar genom en array med OF
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

    //*Loopar genom ett objekt med IN
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

// Is there a way to add new keys and values to an object without using the bracket notation?
// ChatGPT
// Yes, there is an alternative way to add new keys and values to an object without using the bracket notation in JavaScript. It is called dot notation.

// Here's an example that demonstrates the usage of dot notation to add new keys and values to an object:

// javascript
// Copy code
// const obj = {};  // An empty object

// obj.key1 = 'value1';  // Adding a new key 'key1' with the value 'value1' using dot notation
// console.log(obj);  // Output: { key1: 'value1' }
// In this example, the dot (.) is used to add a new property to the obj object. The property name is specified directly after the dot (key1), and the value is assigned using the assignment operator (=).

// It's important to note that dot notation requires the property name to be a valid JavaScript identifier (variable name) without any special characters or spaces. If the property name needs to be dynamic or computed, or if it contains special characters, you need to use bracket notation.

// Here's an example that demonstrates adding a dynamic key-value pair using dot notation:

// javascript
// Copy code
// const key = 'dynamicKey';
// const value = 'dynamicValue';

// const obj = {};

// obj[key] = value;  // Adding a new key-value pair using a variable and dot notation
// console.log(obj);  // Output: { dynamicKey: 'dynamicValue' }
// In this case, the value of the key variable (dynamicKey) is used as the property name, and the dot notation is used to add the key-value pair to the obj object.