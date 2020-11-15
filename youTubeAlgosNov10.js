// ------------------------JavaScript Cardio, Session 2------------------------//

//CHALLANGE 1: LONGEST WORD
//return the longest word of a string, if more than one longest word exists, put it into an array.
//ex: longestWord('Hello my name is Brad') output is Hello
//ex: longestWord('Hello there, my name is Brad') output is Hello, There

function longestWord(sen) {
  //.match() returns an array of words w/out punctuation. params are: a-z 0-9
  const wordArray = sen.toLowerCase().match(/[a-z0-9]+/g);

  //sort by length
  const sorted = wordArray.sort((a, b) => b.length - a.length);

  //if multiple equal length longest words then put them in an array and return it.
  const longestWordArray = sorted.filter((word) => {
    return word.length === sorted[0].length;
  });
  //check if more than one array val
  return longestWordArray.length === 1 ? longestWordArray[0] : longestWordArray;
}

// console.log(longestWord("Hello there my name is Brad"));

//CHALLANGE 2: ARRAY CHUNKING
//split an array into chunked arrays of a specific length
//ex: chunkArray([1,2,3,4,5,6,7], 3) === [[1,2,3],[4,5,6],[7]];
//ex: chunkArray([1,2,3,4,5,6,7], 2) === [[1,2],[3,4],[5,6],[7]];

function chunkArray(arr, len) {
  //initialize a chunked arr
  const chunkArr = [];
  //set index to 0;
  let i = 0;
  //loop while index is less than array.length
  while (i < arr.length) {
    //slice out from the index to the index + chunk length and push into the chunked array
    chunkArr.push(arr.slice(i, i + len));
    //incriment by chunk length
    i += len;
  }
  return chunkArr;
}

// console.log(chunkArray([1,2,3,4,5,6,7], 2))

//CHALLANGE 3: FLATTEN ARRAY
//TAKE AN ARRAY OF ARRAYS AND FLATTEN TO A SINGLE ARRAY
//EX: [[1,2], [3,4], [5,6], [7]] = [1,2,3,4,6,7]

function flattenArray(arrays) {
  //solution 1
  return arrays.reduce((a, b) => a.concat(b));

  // solution 2
  return [].concat.apply([], arrays);

  // colution 3
  return [].concat(...arrays);
}

// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

//CHALLANGE 4: ANAGRAM
//return true if anagram false if not
//ex: 'elbow' === 'below'
//ex: 'Dormatoy' === 'Dirty Room'

function isAnagram(str1, str2) {
  return formatString(str1) === formatString(str2);

  //helper function
  function formatString(str) {
    return str
      .replace(/[^\w]/g, "") //take anything thats not a letter or num and replace it with an empty string
      .toLowerCase()
      .split("")
      .sort()
      .join();
  }
}

// console.log(isAnagram('carmat', 'tarmac'))

//CHALLANGE 5: LETTER CHANGES
//change every letter of the string to the one that follows it
//and capitalize the vowels
//Z should turn to A
//ex: 'hello there' === 'IFmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u|/gi, (vowel) => {
    return vowel.toUpperCase();
  });

  return newStr;
}

console.log(letterChanges("HELLO THERE ZEBRA"));
