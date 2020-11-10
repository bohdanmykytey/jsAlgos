/*
------------ KNAPSACK ------------
 You have a list of items, where every item has a value and a weight,
 You have a bag that holds a maximum weight of X.
 Write a program that maximizes the value of the items put into the bag whilst 
 ensuring that you don't ecxeed the maximum weight 
 */
items = [
  { id: "a", val: 10, w: 3 },
  { id: "b", val: 6, w: 8 },
  { id: "b", val: 3, w: 3 },
];

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

//===========================CHALLANGE TIME============================================//
/*
    1. Write an algorithm that tales an array of nums in as an input and calculate the sum
    of those numbers
    2. Define the time complexity of that algo and determine what the lowest possible time 
    complexity is for the problem
*/

//1.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const findSum = () => {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
      sum += i;
  }
  return sum;
};

console.log(findSum(arr))
//the time complexity of this algo is linear or O(n) becasue the run time complexity 
//goes up linieraly with the number of inputs. in this case 9.