/*
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:

Input: "()"
Output: True
Example 2:

Input: "(*)"
Output: True
Example 3:

Input: "(*))"
Output: True
Note:

The string size will be in the range [1, 100].
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let rcount = 0;
  let lcount = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    lcount += s.charAt(i) === '(' || s.charAt(i) === '*' ? 1 : -1;
    rcount +=
      s.charAt(n - i - 1) === ')' || s.charAt(n - i - 1) === '*' ? 1 : -1;

    if (lcount < 0 || rcount < 0) {
      return false;
    }
  }
  return true;
};

console.log(checkValidString('(*)'));
console.log(checkValidString('()'));
console.log(checkValidString('(*))'));
console.log(checkValidString(')('));
console.log(checkValidString(')'));
