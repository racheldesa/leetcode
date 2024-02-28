/**
 * JS solution to leetcode problem 2108. Find First Palindromic String in the Array
 * 
 * Description: 
 * Given an array of strings words, return the first palindromic string in the array.
 * If there is no such string, return an empty string "".
 * A string is palindromic if it reads the same forward and backward.
 * 
 * @author racheldesa
 * @param {string[]} words 
 * @returns {string}
 */
var firstPalindrome = function(words) {
    for (let word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }
    return "";
};

var isPalindrome = function(word) {
    let j = word.length-1;
    for (let i=0;i<word.length/2;i++) {
        if (word.charAt(i) !== word.charAt(j)) {
            return false;
        }
        j--;
    }
    return true;
};