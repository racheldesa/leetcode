/**
 * Solution for 557. Reverse Words in a String III
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reverseString = "";
    let words = s.split(' ');
    for(word of words) {
        for(let i=word.length-1;i>=0;i--) {
            reverseString += word.charAt(i);
        }
        reverseString += ' ';
    }
    return reverseString.trim();
}