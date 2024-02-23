/**
 * Solution to leetcode problem 1342. Number of Steps to Reduce a Number to Zero
 * 
 * Description: 
 * Given an integer num, return the number of steps to reduce it to zero. 
 * In one step, if the current number is even, you have to divide it by 2, otherwise, you have
 * to subtract 1 from it. 
 * 
 * @author racheldesa
 * @param {number} num 
 * @returns {number} numSteps
 */

var numberOfSteps = function(num) {
    let numSteps = 0;
    while (num != 0) {
        !(num%2) ? num/=2 : num--;
        numSteps++;
    }
    return numSteps;
}