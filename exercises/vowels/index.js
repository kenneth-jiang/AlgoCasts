// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// MY SOLUTION --------------------------------------------------------
function vowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let counter = 0;
  for (let char of str) {
    if (vowels.indexOf(char) !== -1) {
      counter++;
    }
  }
  return counter;
}

// SOLUTION #1 --------------------------------------------------------
// function vowels(str) {
//   let count = 0;
//   const checker = ["a", "e", "i", "o", "u"];
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// SOLUTION #2 --------------------------------------------------------
// function vowels(str) {
//   return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
// }

module.exports = vowels;
