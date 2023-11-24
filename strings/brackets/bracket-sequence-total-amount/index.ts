/**
 * Find the total amount of correct bracket sequences for N bracket pairs.
 *
 * There is string consists of brackets (of one type or of multiple types) of length N.
 * Consequently, there is N/2 bracket pairs in it. The task is to determine how many 
 * correct bracket sequences can be formed from the given string.
 */

/* --------------------
        Approach 1
      Catalan number
   -------------------- */

/**
 * Find number of possible correct bracket sequences with given constraints.
 * @param {number} length - length N of string with brackets (consists of N/2 bracket pairs)
 * @param {number} [types] - number of bracket types (square, angle, etc.) being used, default is 1 (one type)
 * @return {bigint} number of distinct combinations
 */
function findTotal_1 (length: number, types: number = 1): bigint {
    let result = BigInt(1);
 
    for (let i = 1; i <= length / 2; i += 1) {
        result *= (4n * BigInt(i) - 2n);
        result /= (BigInt(i) + 1n);
    }

    return result * BigInt(types ** (length >> 1)); // @todo: proof it
}

/* --------------------
        Approach 2
    Dynamic Programming
   -------------------- */

function findTotalOneType_2 (bracketsLength: number): number {
    const dpTable = [1];

    for (let i = 1; i < bracketsLength / 2; i += 1) {
        let k = 0;
        for (let j = 0; j < i; j += 1) {
            k += dpTable[j] * dpTable[i - 1 - j];
        }
        dpTable[i] = k;
    }

    return dpTable.pop() as number;
}
