/**
 * Convert an integer to a roman numeral.
 *
 * === Solution ===
 * Decrease a given number using Python's divmod analogue 
 * with all unique Roman combinations and concatenate the result with matched symbols.
 *
 * === Complexity ===
 * Time complexity: O(1)
 * Space complexity: O(1)
 */

const dict = {
    // base    // compound
    1: 'I',    4: 'IV',
    5: 'V',    9: 'IX',
    10: 'X',   40: 'XL',
    50: 'L',   90: 'XC',
    100: 'C',  400: 'CD',
    500: 'D',  900: 'CM',
    1000: 'M'
};

function intToRoman(n: number): string {
    const divList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = '';
    let i = 0;

    while (i < divList.length) {
        if (dict[n]) return result + dict[n];
        const x = n / divList[i] | 0;
        const char = dict[divList[i]];
        result += char.repeat(x);
        n = n % divList[i];
        i++;
    }

    return result;
}