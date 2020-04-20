/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

/**
 * Binary Search
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number} target
 * @returns {number}
 */
const binarySearch = (nums, left, right, target) => {
  if (left > right) {
    return -1; // number not found
  }
  // find the middle
  let mid = (left + (right - left) / 2) >> 0; // integer division

  // for integer division you can also use (a/b)|0 or Math.floor(a/b) or ~~(a/b)
  if (nums[mid] === target) {
    return mid;
  }

  // recursive left side
  if (nums[left] <= nums[mid]) {
    if (nums[left] <= target && target < nums[mid]) {
      return binarySearch(nums, left, mid - 1, target);
    }
    return binarySearch(nums, mid + 1, right, target);
  } else {
    // recursive right
    if (nums[mid] < target && target <= nums[right]) {
      return binarySearch(nums, mid + 1, right, target);
    }
    return binarySearch(nums, left, mid - 1, target);
  }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search2 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    // find the mid
    mid = (left + (right - left) / 2) >> 0;

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
// test
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search2([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search2([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(search([5, 1, 3], 3));
console.log(search2([5, 1, 3], 3));
