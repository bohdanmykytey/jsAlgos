//1.1 Given an array of integers, find the largest product yielded from three of the integers

const unsortedArray = [-110, -225, 7, 29, 30, -10, -70, -100, 4, 60, 96];

function sortArray() {
    
    let sortedArr = unsortedArray.sort((a, b) => a - b),
    total1 = 1,
    total2 = 1,
    lastIndex = sortedArr.length - 1;
    total1 = sortedArr[lastIndex] * sortedArr[lastIndex - 1] * sortedArr[lastIndex - 2]
    total2 = sortedArr[0] * sortedArr[1] * sortedArr[lastIndex]


    
    if(total1 > total2){
        return total1
    }
    else{
        return total2
    }

}
console.log(sortArray())