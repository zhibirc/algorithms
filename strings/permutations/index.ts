/**
 * N!
 */

function makePermutation (current: string, rest: string): void {
    if (rest === '') {
        console.log(current);
    } else {
        for (let i = 0; i < rest.length; i += 1) {
            const next = current + rest[i];
            const remaining = rest.slice(0, i) + rest.slice(i + 1);

            makePermutation(next, remaining);
        }
    }
}

makePermutation('', 'abcd');