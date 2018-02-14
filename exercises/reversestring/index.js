// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// MY SOLUTION
// -----------------------------------------------
function reverse(str) {
  let reversedArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedArray.push(str[i])
  }
  return reversedArray.join("");
}

// SOLUTION #1
// -----------------------------------------------
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// SOLUTION #2
// -----------------------------------------------
// function reverse(str) {
//   let reversed = "";
//   for (let character of str) { // iteriates over all elements so can't skip iterations
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// SOLUTION #3
// -----------------------------------------------
// function reverse(str) {
//   return str.split("").reduce((accumulator, currentValue) => currentValue + accumulator, "")
// }

module.exports = reverse;
