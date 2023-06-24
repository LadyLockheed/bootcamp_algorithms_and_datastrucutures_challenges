// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//*TIPS
//RegExp 
// \w - Matches any alpanumeric character from the basig latin alphabet
// \w/ 
// const word = "HI    THERE!!!"
//word.replace(/[^w/]/g, " ").toLowerCase();
// en lösning; använd character map {}

//! My solution - had to peek at the video for help
function anagrams(stringA, stringB) {
    let cleanedStringA = stringA.replace(/[^\w]/g, "")
    let cleandStringB = stringB.replace(/[^\w]/g, "")
   
    const mapA = new Map()
    const mapB = new Map()

    const fillMap = (mapped, str)=> {
        stringArray = Array.from(str)
        stringArray.map((el)=> {
            let countChar = stringArray.filter((letter) => letter === el)
            mapped.set(el, countChar.length)
        })
       
        return mapped
    }

    const filledMapA = fillMap(mapA, cleanedStringA)
    const filledMapB= fillMap(mapB, cleandStringB)

    //Check if the sizes are same, if not they are not anagrams.
    if (filledMapA.size !== filledMapB.size) {
        return false
    }

    //Compare maps, if we cant find a similar value to the key in both maps, they are not anagrams.
    for (let char in filledMapA) {

        if (filledMapA.get(char) !== filledMapB.get(char) ){
            return false
        }

    }

    return true
   
}

console.log(anagrams('applehh!!!', '11papplehh?'))
console.log(anagrams('apple', 'elppa'))
console.log(anagrams('hg', 'hjhkjjkl'))