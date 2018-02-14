// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// MY SOLUTION --------------------------------------------------
function anagrams(stringA, stringB) {
  let replacedA = stringA.replace(/[^\w]/g, "").toLowerCase();
  let replacedB = stringB.replace(/[^\w]/g, "").toLowerCase();
  let objA = {};
  let objB = {};
  for (let ele of replacedA) {
    objA[ele] = objA[ele] + 1 || 1;
  }
  for (let ele of replacedB) {
    objB[ele] = objB[ele] + 1 || 1;
  }
  if (Object.keys(objA).length === Object.keys(objB).length) {
    for (let key in objA) {
      if (objA[key] !== objB[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// SOLUTION #1 -------------------------------------------------
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// SOLUTION #2 --------------------------------------------------
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w/]g/, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
