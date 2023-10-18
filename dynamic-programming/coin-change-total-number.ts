/**
 * Get the total number of ways to make a change of given amount of money.
 *
 * Given an integer array of coins representing different types of denominations and an integer
 * denoted the amount of money, determine all possibilities of coins for change.
 * Order matters, i.e. "3 1" and "1 3" considered different.
 */

/* ---------- Approach 1 ---------- */

function getCoinChangeTotalNumber(n: number, coins: number[]): number {
    const dp = [1, ...Array(n).fill(0)];

    for (let i = 1; i <= n; i += 1) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] += dp[i - coin];
            }
        }
    }
    
    return dp[n];
}

/* ---------- Approach 2: Recursion ---------- */
