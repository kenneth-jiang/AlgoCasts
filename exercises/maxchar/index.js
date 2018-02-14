// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// MY SOLUTION ---------------------------------------
function maxChar(str) {
  let maxCount = 0;
  let maxEle = "";
  let count = 1;
  if (str.length === 1) {
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
        if (count > maxCount) {
          maxCount = count;
          maxEle = str[i];
          debugger
        }
      }
    }
  }
  return maxEle;
}

// SOLUTION #1 ---------------------------------------
// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = "";
//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

module.exports = maxChar;
