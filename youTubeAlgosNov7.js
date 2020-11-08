//CAHNNAGE 1: Reverse a String.
//return a string in reverse
//ex. unput hello ==> olleh

function stringReverse(string1) {
  let reversedString = string1.split("").reverse().join("");
  return reversedString;
}

// console.log(stringReverse("Mike Tyson"));

//Challange 2: VALIDATE A PALLINDROME
//return true if pallindrome, flase if not
//ex: isPallindrome('racecar') => true
// isPallindrome('hello') => false

function isPallindrome(string2) {
  const revString = string2.split("").reverse().join("");
  return revString === string2;
}

// console.log(isPallindrome('madam'));

//CHALLANGE 3: REVERSE AN INTEGER

function reverseInt(int) {
  const revInt = int.toString().split("").reverse().join(""); //turns to string and reverses

  return parseInt(revInt); //takes reversed string and turns back into intiger
}

// console.log(reverseInt(12345))

//CHALLANGE 4: CAPATILIZE LETTERS
//pass in a sentance and capitalize the first letter
//of every word

//FOR LOOP SOLUTION LESS EFFICIENT BECASUE OF LINEAR TIME COMPLEXITY
function capFistLetter(string3) {
  const strArr = string3.toLowerCase().split(" ");

  //substring()  method returns the part of the string between the
  //start and end indexes, or to the end of the string. its like splice()
  //but for specific strings not string arrays. More of a micro scope
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
}

// console.log(capFistLetter("i am man, hear me roar"));

//SAME PROBLEM USING MAP SOLUTION -- BEST SOLUTION BECASUE OF COSNTANT TIME COMPLEXITY
function capitalizeFirstLetter(string4) {
  return string4
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

console.log(capitalizeFirstLetter("hi im bob"));

//CHALLANGE 4: MAX CHARACHTER
