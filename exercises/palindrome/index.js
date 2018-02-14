// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// MY SOLUTION ----------------------------------------
function palindrome(str) {
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return true;
  }
  return false;
}

// SOLUTION #1 ----------------------------------------
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// SOLUTION #2 ----------------------------------------
// function palindrome(str) {
//   return str.split("").every((ele, index) => ele === str[str.length - index - 1]);
// }

module.exports = palindrome;
