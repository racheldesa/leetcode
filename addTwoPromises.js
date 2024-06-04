/**
 * Solution to leetcode problem 2723. Add Two Promises
 */

/**
 * 
 * @param {Promise} promise1 
 * @param {Promise} promise2 
 * @returns {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const par1 = await promise1;
    const par2 = await promise2;
    return par1+par2;
}