/**
 * Find the least number of coins that add up to a given amount of money.
 *
 * Given an integer array of coins representing different types of denominations and an integer
 * denoted the amount of money, determine the smallest number of coins for change.
 */

/* ---------- Approach 1 ---------- */

function f(n, coins) {
    const dp = [0];

    for (let i = 1; i <= n; i += 1) {
        const tmp = [];

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

function fRec(n, coins) {
    if (n <= 0) return 0;

    return 1 + Math.min(...coins.map(coin => fRec(n - coin, coins)));
}