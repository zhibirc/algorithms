/**
 * Get coins which form the least number of coins that add up to a given amount of money.
 *
 * Given an integer array of coins representing different types of denominations and an integer
 * denoted the amount of money, determine the smallest number of coins for change.
 *
 * It's a logical continuation of the change-making problem for fnding the least number of coins.
 * Here is the task to find coins themselves.
 */

function getCoinChangeLeastCoins(n: number, coins: number[]): number[] {
    const dp: number[] = [0];
    const result: number[] = [];

    for (let i = 1; i <= n; i += 1) {
        let min = +Infinity;
        let coinDenomination = 0;

        for (const coin of coins) {
            if (coin <= i) {
                const current = 1 + dp[i - coin];

                if (current < min) {
                    min = current;
                    coinDenomination = coin;
                }
            }
        }
        
        dp.push(coinDenomination);
    }
    
    while (n > 0) {
        result.push(dp[n]);
        n -= dp[n];       
    }

    return result;
}