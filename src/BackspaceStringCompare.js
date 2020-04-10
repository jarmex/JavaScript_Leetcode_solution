/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function (S, T) {
  let tempHolder = [];
  S.split('').forEach((item) => {
    if (tempHolder.length > 0 && item === '#') {
      tempHolder.pop();
    } else if (item !== '#') {
      tempHolder.push(item);
    }
  });
  let firstString = tempHolder.join('');
  // console.log(firstString);
  let secondHolder = [];
  T.split('').forEach((item) => {
    if (secondHolder.length > 0 && item === '#') {
      secondHolder.pop();
    } else if (item !== '#') {
      secondHolder.push(item);
    }
  });
  let secondString = secondHolder.join('');
  // console.log(secondString);
  return firstString === secondString;
};

console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.log(backspaceCompare('a##c', '#a#c')); // true
console.log(backspaceCompare('a#c', 'b')); // false
console.log(backspaceCompare('ab##', 'c#d#')); // true
