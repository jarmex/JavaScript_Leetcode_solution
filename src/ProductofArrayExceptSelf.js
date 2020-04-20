/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all 
the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array 
(including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the 
  purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let product = 1;
  let productWithoutZeros = 1;
  let zerosCount = 0;

  for (let item of nums) {
    product *= item;
    if (item === 0) {
      zerosCount++;
    } else {
      productWithoutZeros *= item;
    }
  }

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (product !== 0) {
      result[i] = product / nums[i];
    } else if (zerosCount === 1 && nums[i] === 0) {
      result[i] = productWithoutZeros;
    } else {
      result[i] = 0;
    }
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
