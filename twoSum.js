/**
 * JS solution to leetcode problem 1. Two Sum
 * 
 * Description: 
 * Given an array of integers nums and an integer target, return 
 * indices of the two numbers such that they add up to target. 
 * Assume that each input would have exactly one solution, and you may
 * not use the same element twice. You can return the answer in any order. 
 * 
 * @author racheldesa
 * @param nums array of integers
 * @param target target sum
 * @return idxs 1x2 array containing indexes of elements of nums that add 
 *         up to target
 */
var twoSum = function(nums, target) {
    let idxs = [];
    for (let i=0;i<nums.length-1;i++) {
        for (let j=i+1;j<nums.length;j++) {
            if ((nums[i] + nums[j]) == target) {
                idxs.push(i);
                idxs.push(j);
                break;
            }
        }
    }
    return idxs;
}