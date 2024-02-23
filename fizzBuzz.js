/**
 * JS solution to leetcode problem 412. Fizz Buzz
 * 
 * Description: 
 * Given an integer n, return a string array answer (1-indexed) where:
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5
 * answer[i] == "Fizz" if i is divisible by 3
 * answer[i] == "Buzz" if i is divisible by 5
 * answer[i] == i (as a string) if none of the above conditions are true 
 * 
 * @author racheldesa
 * @param {number} n length of answer
 * @returns {string[]} answer
 */
var fizzBuzz = function(n) {
    let answer = [];
    for (let i=1; i<=n; i++) {
        if (!(i%15)) {
            answer.push("FizzBuzz");
        }
        else if (!(i%3)) {
            answer.push("Fizz");
        }
        else if (!(i%5)) {
            answer.push("Buzz");
        }
        else {
            answer.push(i.toString());
        }
    }
    return answer;
};