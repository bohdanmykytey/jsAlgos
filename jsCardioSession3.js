//CHALLANGE 1: ADD ALL NUMBERS
//return the sum of all params regarless of the number of inputs
//no arrays

function addNums(...numbers) {
  //takes in any num of inputs thanks to the spread operator
  let total = 0;
  numbers.forEach((num) => {
    total += num;
  });
  return total;
}

console.log(addNums(1, 2, 3, 4, 5));

//CHALLANGE 2: SUM ALL PRIMES
