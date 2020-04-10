/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit 
signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your 
function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let negative = x < 0 ? true : false;
  let num = x < 0 ? x * -1 : x;
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  const min = -1 * 2 ** 31;
  const max = 2 ** 31 - 1;
  if (reversed <= min || reversed >= max) {
    return 0;
  }
  return negative ? -1 * reversed : reversed;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
