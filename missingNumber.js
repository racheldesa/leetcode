/**
 * Solution to leetcode problem 268. Missing Number
 * @author racheldesa@outlook.com
 * @param {number[]} nums
 * @return {number} missing number [0,n] from nums
 */
var missingNumber = function(nums) {
    for (let num=0;num<nums.length;num++) {
        if (nums.indexOf(num) == -1) {
            return num;
        }
    }
    return nums.length;
};