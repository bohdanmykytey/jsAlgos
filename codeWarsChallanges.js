//CATEGORIZE NEW MEMBER
//a golf club wants your help accepting new memebers. 
//2 memebership tiers: open and senior. 
//if at or over 55 age and handicap greater than 7 === open else regular

function categorizeMemberships(memberInfo) {
    return memberInfo.map(([age, handicap]) => (age => 55 && handicap > 7) ? "Senior" : "Open");
}

// console.log(categorizeMemberships([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

//CHALLANGE 2: DECODE THE SONG THATS BEEN REMIXED INTO A DUB-STEP SONG
//songDecoder("WEWUBWUBAREWUBWUBTHEWUBWUBTHEWUBCHAMPIONSWUBWUBWUBWUB")
// => WE ARE THE CHAMPIONS

function songDecoder(song) {
    //the plus sign gets rid of that one extra space
    //.trim() gets rid of white spaces before and after the phrase
    return song.replace(/(WUB)+/g, " ").trim()
}

// console.log(songDecoder("WEWUBWUBAREWUBWUBTHEWUBWUBTHEWUBCHAMPIONSWUBWUBWUBWUB"))

//CREATE A FUNCTION THAT RETURNS THE SUM OF THE LOWEST POSITIVE INTS
//FIVEN AN ARRAY OF MINIMUM 4 POSITIVE INTS. NO FLOATS

function lowestPosIntsSum(nums) {
    nums.sort((a, b) => a - b)
    let total = nums[0] + nums[1]
    return total;
}

// console.log(lowestPosIntsSum([10, 12, 60, 55, 2, 16, 75, 99]))

// GIVEN A STRING, REPLACE EVERY LETTER WITH ITS POSITION IN THE ALPHABET

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function alphabetPosition(text) {
    return text
        .toLowerCase()
        .replace(/[^a-zA-Z]/g, '')
        .split('')
        .map((letter) => alphabet.indexOf(letter) + 1)
}

// console.log(alphabetPosition('The sun sets at twelve o\'clock'));

//VOWEL COUNT: return the number of vowels in the given string.
//a, e, i, o, u. are in question but not y.
//the input string will only consist of lower case letters and/or spaces.

function vowelCount(text) {
    let count = 0;
    for (const letter of text) {
        if(letter.match(/[aeiou]/g))    {
           count++;
        }
    }
    return count;
}

console.log(vowelCount("abracadabra"));