/**
 * Find the least number of coins that add up to a given amount of money.
 *
 * Given an integer array of coins representing different types of denominations and an integer
 * denoted the amount of money, determine the smallest number of coins for change.
 */

/* ---------- Approach 1 ---------- */

function f(n: number, coins: number[]): number {
    const dp: number[] = [0];

    for (let i = 1; i <= n; i += 1) {
        const tmp: number[] = [];

        for (const coin of coins) {
            if (coin <= i) {
                tmp.push(1 + dp[i - coin]);
            }
        }
        
        dp.push(Math.min(...tmp));
    }
    
    return dp[n];
}

/* ---------- Approach 2: Recursion ---------- */

function fRec(n: number, coins: number[]): number {
    if (n <= 0) return 0;

    return 1 + Math.min(...coins.map(coin => fRec(n - coin, coins)));
}

/* ---------- Approach 2: Greedy ---------- */

/**
 * Solution using greedy algorithm.
 * Repeatedly takes the largest coin whose value is no larger than the remaining amount.
 * In general case, the greedy approach is not always optimal. For example:
 * fGreedy(6, [1, 3, 4]) -> 3 (takes 4, then 1 two times)
 * fGreedy(18, [1, 9, 10]) -> 9 (takes 10, then 1 eight times)
 */
function fGreedy(n: number, coins: number[]): number {
    // not mandatory if it's guaranteed that coin list is already sorted by denominations
    // if sorting is required, here it could be done in O(n) using Counting Sort
    const coinsSorted = [...coins].sort((a, b) => a - b);
    
    return coinsSorted.reduce((count, coin) => {
        count += n / coin | 0;
        n %= coin;

        return count;
    }, 0);
}