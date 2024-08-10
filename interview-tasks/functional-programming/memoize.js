/**
 * Memoize of given function.
 *
 * The purpose of memoization is to remember previously calculataed result to prevent re-calcalation in the future
 * if it was calculated sometimes.
 *
 * @param {Function} fn - function for memoization
 *
 * @return {Function} memoized version of given function
 */
function memoize ( fn ) {
    // your awesome code here
}

// driver code for testing
function calculate ( n ) {
    console.log(`Invoked with ${n}.`);

    return (1 + n) * n / 2;
}

calculate = memoize(calculate);

console.log(calculate(5));
console.log(calculate(5));
console.log(calculate(3));
console.log(calculate(5));
console.log(calculate(1));
console.log(calculate(3));

/**
 * Solution on "Memoize of given function".
 */

function memoize ( fn ) {
    const cache = new Map();

    return n => cache.has(n)
        ? cache.get(n)
        : (cache.set(n, n = fn(n)), n);
}
