/**
 * JS solution to leetcode problem 1480. Running Sum of 1d Array
 * 
 * Description: 
 * Given an array nums. We define a running sum of an array as
 * runningSum[i] = sum(nums[0]...nums[i]).
 * 
 * Return the running sum of nums. 
 * 
 * @author racheldesa
 * @param {number[]} nums 
 * @returns {number[]} runningSum
 */
var runningSum = function(nums) {
    let runningSum = [];
    runningSum.push(nums[0]);
    for (let i=1;i<nums.length;i++) {
        runningSum[i] = nums[i] + runningSum[i-1];
    }
    return runningSum;
};