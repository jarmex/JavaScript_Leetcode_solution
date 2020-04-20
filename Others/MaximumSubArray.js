/*
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the 
divide and conquer approach, which is more subtle.

*/

/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
var maxSubArray = (nums) => {
  let dp = [];
  let max = (dp[0] = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] <= 0) {
      dp[i] = nums[i];
    } else if (dp[i - 1] > 0) {
      if (nums[i] + dp[i - 1] <= 0) {
        dp[i] = nums[i];
      } else {
        dp[i] = nums[i] + dp[i - 1];
      }
    }
    max = Math.max(dp[i], max);
  }
};
// It takes O(n) time complexity and O(n) space complexity

// To reduce to O(1) space complexity
/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
const maxSubArray1 = (nums) => {
  let prv = nums[0];
  let current = 0;
  let max = prv;
  for (let i = 1; i < nums.length; i++) {
    if (prv <= 0) {
      current = nums[i];
    } else {
      if (nums[i] + prv <= 0) {
        current = nums[i];
      } else {
        current = nums[i] + prv;
      }
    }
    max = Math.max(current, max);
    prv = current;
  }
  return max;
};
