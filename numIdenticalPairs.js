/**
 * JS solution to leetcode problem 1512. Number of Good Pairs
 * Description: 
 * Given an array of integers nums, returns the number of good pairs
 * 
 * A pair (i,j) is called "good" if nums[i] == nums[j] and i < j
 * 
 * @author racheldesa
 * @param {number[]} nums
 * @return {number} the number of good pairs in nums
 */
var numIdenticalPairs = function(nums) {
    let numGoodPairs = 0;
    for (let i=0;i<nums.length-1;i++) {
        for (let j=i+1;j<nums.length;j++) {
            if (nums[i] == nums[j]) {
                numGoodPairs++;
            }
        }
    }
    return numGoodPairs;
};