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

function findTotalOneType_1 (bracketsLength: number): bigint {
    let result = BigInt(1);
 
    for (let i = 1; i < bracketsLength / 2; i += 1) {
        result *= (4n * BigInt(i) - 2n);
        result /= (BigInt(i) + 1n);
    }

    return result;
}

function findTotalMultType_1 (bracketsLength: number): bigint {
    // @todo: implement
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

function test() {
    // @todo: implement
}