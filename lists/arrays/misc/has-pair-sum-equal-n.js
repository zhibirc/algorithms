/**
 * Solution on "Determine if given array has a pair of numbers whose sum is match the give target".
 *
 * There could be different variations of this problem: ordered and unordered lists,
 * find the actual pair instead of the fact itself, implement Binary Search additionally,
 * imagine that input list is huge, for example has 1e9 of elements,
 * case when list size is huge and it's located in external memory,
 * handling corner/edge cases and could they be helpful to optimize each solution.
 */

/**
 * Determine if given array has a pair of numbers whose sum is match the give target.
 * Complexity: naive/pure brute-force, O(N^2).
 *
 * @param {Array<number>} list - ordered number sequence
 * @param {number} n - number to match 
 * @returns {boolean}
 */
function hasPair (list, n) {
    for (let i = 0; i < list.length - 1; i += 1) {
        for (let j = i + 1; j < list.length; j += 1) {
            if (list[i] + list[j] === n) return true;
        }
    }

    return false;
}

/**
 * Determine if given array has a pair of numbers whose sum is match the give target.
 * Complexity: one pass + binary search, O(N * log2(N)).
 *
 * @param {Array<number>} list - ordered number sequence
 * @param {number} n - number to match 
 * @returns {boolean}
 */
function hasPair (list, n) {
    for (let i = 0; i < list.length - 1; i += 1) {
        const target = n - list[i];
        // implementation is not required here
        if (searchBinary(list, i + 1, target)) return true;
    }

    return false;
}

/**
 * Determine if given array has a pair of numbers whose sum is match the give target.
 * Complexity: two pointers, O(N).
 *
 * @param {Array<number>} list - ordered number sequence
 * @param {number} n - number to match 
 * @returns {boolean}
 */
function hasPair (list, n) {
    let left = 0;
    let right = list.length - 1;

    while (left < right) {
        const x = list[left] + list[right];
        
        if (x === n) {
            return true;
        } else if (x > n) {
            right -= 1;
        } else {
            left += 1;
        }
    }

    return false;
}