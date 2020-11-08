 /*
------------ KNAPSACK ------------
 You have a list of items, where every item has a value and a weight,
 You have a bag that holds a maximum weight of X.
 Write a program that maximizes the value of the items put into the bag whilst 
 ensuring that you don't ecxeed the maximum weight 
 */
items = [
    {id: 'a', val: 10, w: 3},
    {id: 'b', val: 6, w: 8},
    {id: 'b', val: 3, w: 3}
]

//why are companies asking for problems like this when they are rarely used in real life?
//these algos are asked to check problem solving skills!!!!

const sumUp = (n) =>    {
    let result = 0;
    for(let i = 0; i <=n; i++)  {
        result += i;
    }
    return result;
}

console.log(sumUp(3)) //returns 6 because 3+2+1 = 6
//this function is a linear time complexity (constant time), 
//meaning a bigger number takes more time
//proportionately...aka x = y 
