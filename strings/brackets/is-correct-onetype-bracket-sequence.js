/**
 * Check if a given bracket sequence is correct (one bracket type).
 *
 * Correct bracket sequence can be defined as:
 * 1) empty string;
 * 2) correct bracket sequence inside another correct bracket sequence;
 * 3) sequence of correct bracket sequences.
 *
 * Let's use "()" as brackets.
 * 
 * Complexity: O(N) time and O(1) space
 */

const BRACKET = {
    open: '(',
    close: ')'
};

/**
 * @param {string} sequence - string consists of left and right brackets in arbitrary order
 *
 * @return {boolean} result of checking sequence for correctness
 */

function check (sequence) {
    let count = 0;

    for (const char of sequence) {
        if (count < 0) {
            return false;
        }

        char === BRACKET.open ? ++count : --count;
    }

    return count === 0;
}

// tests

// correct
console.assert(check(''));
console.assert(check('()'));
console.assert(check('(())'));
console.assert(check('(()())'));
console.assert(check('(())()()(())'));

// incorrect
console.assert(!check(')'));
console.assert(!check('('));
console.assert(!check('(())('));
console.assert(!check(')()()(()'));
console.assert(!check('()((()(()(()))))))())))))(()'));