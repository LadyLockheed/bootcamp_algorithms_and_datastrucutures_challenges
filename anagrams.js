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
function anagrams(stringA, stringB) {
    let cleanedStringA = stringA.replace(/[^\w]/g, "")
    let cleandStringB = stringB.replace(/[^\w]/g, "")

//    const mapStringA = new Map()
//    const mapStringB = new Map()

//    newStringB.map((el)=> {
//     let countChar = arr.filter((x) => x === el)
//     mapStringB.set(countChar, el)
//    })

//    newStringA.map((el)=> {
//     let countChar = arr.filter((x) => x === el)
//     mapStringA.set(countChar, el)
//    })

    const makeObject = (str)=> {
        let obj = {}
        for (let char of str){
            obj[char] = obj[char] +1 || 1
        }
        return obj

    }

    let objA= makeObject(cleanedStringA)
    let objB= makeObject(cleandStringB)

    console.log(objA)
  

   
}

anagrams('apple!!!', '11papple?')