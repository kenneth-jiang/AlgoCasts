// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// MY SOLUTION ----------------------------------------------------------------
// function fib(n) {
//   let fibArray = [0, 1];
//   if (fib.length < n) {
//     let counter = 2;
//     for (let i = counter; i <= n; i++) {
//       let sum = parseInt(fibArray.slice(-1)) + parseInt(fibArray.slice(-2));
//       fibArray.push(sum)
//       counter ++;
//     }
//   }
//   return fibArray.pop();
// }

// SOLUTION #1 ----------------------------------------------------------------
// function fib(n) {
//   const result = [];
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1]; // result[result.length - 1]
//     const b = result[i - 2]; // result[result.length - 2]
//     result.push(a + b);
//   }
//   return result[n] // result[result.length - 1]
// }

// SOLUTION #2 ----------------------------------------------------------------
function memorize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memorize(slowFib);

module.exports = fib;
