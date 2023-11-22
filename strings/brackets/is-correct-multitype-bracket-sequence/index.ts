/**
 * Check if a given bracket sequence is correct (multiple bracket types).
 *
 * Correct bracket sequence can be defined as:
 * 1) empty string;
 * 2) correct bracket sequence inside another correct bracket sequence;
 * 3) sequence of correct bracket sequences.
 *
 * Let's use "{}[]()" as brackets.
 * 
 * Complexity: O(N) time and O(N) space
 */

const BRACKET = {
    ')': '(',
    ']': '[',
    '}': '{'
};

function check (sequence: string | Array<string>): boolean {
    let stack: Array<string> = [];

    for (const char of sequence) {
        if (BRACKET[char]) {
            if (stack.length === 0 || stack.at(-1) !== BRACKET[char]) {
                return false;
            }

            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

function test() {
    // correct
    console.assert(check(''));
    console.assert(check('()'));
    console.assert(check('[]'));
    console.assert(check('({})'));
    console.assert(check('[(){}]'));
    console.assert(check('{{}}()()[[]]'));

    // incorrect
    console.assert(!check(')'));
    console.assert(!check('['));
    console.assert(!check('({})('));
    console.assert(!check('}[][](()'));
    console.assert(!check('{}(([](()[{}])))))[])))))({}'));
}