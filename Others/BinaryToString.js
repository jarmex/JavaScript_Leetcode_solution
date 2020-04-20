/*
Given a real number between 0 and 1 (e.g., 0.72) that is passed in as a double, print the binary representation. 
If the number cannot be represented accurately in binary with at most 32 characters, print"ERROR:'
*/

/**
 *
 * @param {number} num
 * @return {string}
 */
const printBinary = (num) => {
  if (num >= 1 || num <= 0) {
    return 'ERROR';
  }
  let binary = [];
  binary.push('.');
  while (num > 0) {
    // console.log(binary);
    /* Setting a limit on the length: 32 characters */
    if (binary.length >= 32) {
      return 'ERROR';
    }
    let r = num * 2;
    if (r >= 1) {
      binary.push(1);
      num = r - 1;
    } else {
      binary.push(0);
      num = r;
    }
  }
  return binary.join('');
};

//test
console.log(printBinary(0.72));
