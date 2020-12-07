/*
REPLACE EVERY VOUWEL OF YOUR NAME WITH 'oodle'
*/

function replaceVowel(userInput) {
    let string = userInput.split('').toString().toLowerCase()
    let replacedVowels = string.replace(/[eaiouy]/g, 'oodle')
    return replacedVowels.replace(/,/g, '')
}

console.log(replaceVowel('Jesse'))