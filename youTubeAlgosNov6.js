//why are companies asking for problems like this when they are rarely used in real life?
//these algos are asked to check problem solving skills!!!!

const sumUp = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};

// console.log(sumUp(4)) //returns 6 because 3+2+1 = 6
//this function is a linear time complexity (constant time),
//meaning a bigger number takes more time
//proportionately...aka x = y

function sumUpMath(n) {
  return (n / 2) * (n + 1);
}

// console.log(sumUpMath(3))

//===========================CHALLANGE TIME===========================//
/*
    1. Write an algorithm that tales an array of nums in as an input and calculate the sum
    of those numbers
    2. Define the time complexity of that algo and determine what the lowest possible time 
    complexity is for the problem
*/

//1.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const findSum = () => {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
      sum += i;
  }
  return sum;
};

// console.log(findSum(arr))

//2.
//the time complexity of this algo is linear or O(n) becasue the run time complexity 
//goes up linieraly with the number of inputs. in this case 9.
//for this particular problem there is no better time complexity solution UNLESS we know the 
//size of the array beforehand.

//side note, you could also write a solution to this problem using the .recude method BUT resulting 
//in a on line of coding with seemingly an O(1) time complexity, but this IS NOT the case as .reduce
//itself has a liner time complexity


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const findSumOfArray = () =>    {
    return arr.reduce((counter, currentValue) => counter + currentValue, 0);
}

console.log(findSumOfArray(arr))
//again, seemingly better solution but in terms of time complexity it's still O(n)
