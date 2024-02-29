/**
 * JS solution to leetcode problem 4. Median of Two Sorted Arrays
 * 
 * Description: 
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, 
 * return the median of the two sorted arrays. 
 * The overall run time complexity should be O(log (m+n)).
 * 
 * @author racheldesa
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = (nums1, nums2) => {
    let merged = merge(nums1,nums2);
    if (merged.length%2) { // odd length array
        return (merged[Math.floor(merged.length/2)]);
    } else { // even length array
        return ((merged[merged.length/2] + merged[(merged.length/2)-1])/2);
    }
};

let merge = (arr1,arr2) => {
    let p = arr1.length;
    let q = arr2.length;
    // Create an empty array of length p+q
    let merged = [];
    let i=0;
    let j=0;
    while (i<p && j<q) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i]);
            i++;
        }
        else {
            merged.push(arr2[j]);
            j++;
        }
    }
    if (i>=p) {
        while (j<q) {
            merged.push(arr2[j]);
            j++;
        }
    } 
    else {
        while (i<p) {
            merged.push(arr1[i]);
            i++;
        }
    }
    return merged;
};