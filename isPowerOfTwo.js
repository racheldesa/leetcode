/**
 * Solution to Leetcode problem 
 * 231. Power of Two
 * @param {number} n
 * @return {boolean}
 *  true if n is a power of 2 that is greater than or equal to 1
 *  false otherwise
 */
var isPowerOfTwo = function(n) {
    if (n < 1) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    else {
        return isPowerOfTwo(n/2);
    }
};