// Given an array of integers nums and an integer target, return indices of the two numbers such that 
// they add up to target. You may assume that each input would have exactly one solution, and you may
// not use the same element twice. You can return the answer in any order.

function twoSum(nums, target) {
    const numbersMap = new Map();
    let result = [];

    for (let i = 0; i < nums.length; i++)   {
        let complement = target - nums[i];

        if (numbersMap.has(complement)) {
            result[0] = numbersMap.get(complement)
            result[1] = i;

            return result;
        }
        numbersMap.set(nums[i], i)
    }
    return result;
};

console.log(twoSum([2,7,11,15], target = 13))