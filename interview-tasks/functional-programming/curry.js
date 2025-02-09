/**
 * Implement currying/curried function.
 *
 * Return a curried equivalent of the provided function.
 * In this implementation its arguments needn't be provided one at a time.
 */


/**
 * Curry of given function.
 *
 * @param {Function} fn - arbitrary function to be curried
 *
 * @return {Function} curried function
 */
function curry ( fn ) {
    // your awesome code here
}

// test 1
const add = (a, b, c) => a + b + c;
const addCurried = curry(add);

console.assert(addCurried(1)(2)(3) === 6);
console.assert(addCurried(1, 2, 3) === 6);
console.assert(addCurried(1, 2)(3) === 6);
console.assert(addCurried(1)(2, 3) === 6);

// test 2
const getDate = (year, month, day, hour, minute) => new Date(year, month, day, hour, minute).getTime();
const getDateCurried = curry(getDate);

const reference = new Date(2023, 3, 5, 15, 30).getTime();

// tests
console.assert(getDateCurried(2023)(3)(5)(15)(30) === reference);
console.assert(getDateCurried(2023, 3, 5, 15, 30) === reference);
console.assert(getDateCurried(2023, 3)(5)(15, 30) === reference);
console.assert(getDateCurried(2023)(3, 5)(15)(30) === reference);

/**
 * Solution on "Implement currying/curried function".
 */

function curryV1 (fn) {
    return function curried(...args) {
        if ( args.length >= fn.length ) {
            //return fn(...args);
            return fn.apply(this, args);
        }

        //return (...rest) => curried(...args, ...rest);
        return curried.bind(this, ...args);
    };
}


function curryV2 ( fn, len = fn.length ) {
    const _args = [];
    let count = 0;

    return function step ( ...rest ) {
        count += rest.length;
        _args.push(...rest);

        if ( count >= len ) {
            const args = _args.slice(0, len);
            _args.length = count = 0;

            return fn(...args);
        }

        return step;
    };
}
