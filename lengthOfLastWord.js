/**
 * JS Solution to leetcode problem 58. Length of Last Word
 * 
 * Description: 
 * Given a string s consisting of words and spaces, return the length of the last 
 * word in the string.
 * A word is a maximal substring consisting of non-space characters only. 
 * 
 * @author racheldesa
 * @param {string} s A string consisting of only English letters and spaces ' ' 
 * @return {number} The length of the last word in s
 */
var lengthOfLastWord = function(s) {
    let cleanStr = s.trim();    // remove extra whitespace on ends
    let words = cleanStr.split(' ');
    return words[words.length-1].length;
};