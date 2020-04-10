/* Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any 
positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), or it 
loops endlessly in a cycle which does not include 1. Those numbers for which 
this process ends in 1 are happy numbers.

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

HINT: Look for why the numbers either result in 4 or 1
*/
const isHappy = (n) => {
  if (n === 1) return true;
  if (n === 4) return false;
  return isHappy(tosumofsquares(n));
};

/**
 * @param {number} n
 * @return {number}
 **/
const tosumofsquares = (n) => {
  let sum = 0;
  while (n !== 0) {
    sum += (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }
  // console.log(sum);
  return sum;
};
const result = isHappy(26);
console.log(result);
