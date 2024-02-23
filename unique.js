/**
 * JS solution to leetcode problem 387. First Unique Character in a String
 * @author racheldesa
 * @param {string} s 
 * @returns {number} index of first non-repeating character in s. Returns -1 if DNE
 */
var firstUniqChar = function(s) {
    for (let i=0;i<s.length;i++) {
        if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
            return i;
        }
    }
    return -1;
}