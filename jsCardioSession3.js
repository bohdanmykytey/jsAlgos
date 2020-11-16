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

// console.log(addNums(1, 2, 3, 4, 5));

//CHALLANGE 2: SUM ALL PRIMES
//pass in a number to loop up to and add all of the prime numbers.
//A prime number us a whole number than 1 whos factors are only 1 and itself
//ex: sumAllPrimes(10) === 17

function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrimes(10));
