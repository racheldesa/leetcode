/**
 * Solution to leetcode problem 136. Single Number
 * @author racheldesa@outlook.com
 * @param {number[]} nums a non-empty array of integers where every element except for one
 * appears twice
 * @return {number} The value of the non-repeating element in nums
 */
var singleNumber = function(nums) {
    let myNums = [];
    for (let i=0;i<nums.length;i++) {
        if (myNums.includes(nums[i])) { // remove repeated value
            myNums.splice(myNums.indexOf(nums[i]),1);
        }
        else {
            myNums.push(nums[i]);
        }
    }
    return myNums[0];
};