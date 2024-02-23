/**
 * JS solution to leetcode problem 1672. Richest Customer Wealth
 * 
 * Description: 
 * You are given an m x n integer grid accounts where accounts[i][j] 
 * is the amount of money the ith customer has in the jth bank. 
 * Return the wealth that the richest customer has. 
 * A customer's wealth is the amount of money they have in all their
 * bank accounts. The richest customer is the customer that has 
 * the maximum wealth. 
 * 
 * @author racheldesa
 * @param {number[][]} accounts 
 * @returns {number} wealth of the richest customer
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let i=0; i<accounts.length; i++) {
        let acctAmt = 0;
        for (let j=0; j<accounts[i].length; j++) {
            acctAmt += accounts[i][j];
        }
        maxWealth = Math.max(maxWealth, acctAmt);
    }
    return maxWealth;
}