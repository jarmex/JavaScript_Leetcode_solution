/*
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:

Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:

Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let dict = {};
  let subarr = 0;
  let count = 0;
  nums.forEach((item, i) => {
    if (item === 1) {
      count += 1;
    } else {
      count = count - 1;
    }

    if (count === 0) {
      subarr = i + 1;
    }
    if (dict[count] !== undefined) {
      subarr = Math.max(subarr, i - dict[count]);
    } else {
      dict[count] = i;
    }
  });
  return subarr;
};
console.log(findMaxLength([0, 0, 1]));
