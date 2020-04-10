/*
Given an array of strings, group anagrams together.

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]


Note:

All inputs will be in lowercase.
The order of your output does not matter.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = {};

  strs.forEach((item) => {
    const sortStr = item.split('').sort().join('');
    if (result[sortStr]) {
      result[sortStr].push(item);
    } else {
      result[sortStr] = [item];
    }
  });
  return Object.values(result);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
