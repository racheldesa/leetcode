/**
 * JS solution to leetcode problem 977. Squares of a Sorted Array
 * 
 * Description: 
 * Given an integer array nums sorted in non-decreasing order, return 
 * an array of the squares of each number sorted in non-decreasing order.
 * 
 * @param {number[]} nums
 * @return {number[]}
 * @author racheldesa
 */
var sortedSquares = function(nums) {
    let squares = [];
    for(let num of nums) {
        squares.push(num*num);
    }
    return squares.toSorted((a, b) => a - b);
};