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

console.log(longestWord("Hello there my name is Brad"));
