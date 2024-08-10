/**
 * Create Function Composition.
 *
 * @see {@link https://en.wikipedia.org/wiki/Function_composition_(computer_science)}
 *
 * @example
 * const addEyes = part => ':' + part;
 * const addNose = part => '-' + part;
 * const addSmile = () => ')';
 *
 * compose(addEyes, addNose, addSmile)(); // :-)
 */

function compose ( ...funcs ) {
    // your awesome code here
}

const addEyes = (part = '') => ':' + part;
const addNose = (part = '') => '-' + part;
const addSmile = (part = '') => ')' + part;

// tests
console.assert(compose(addEyes, addNose, addSmile)() === ':-)', 'strange face detected');
console.assert(compose(addSmile, addNose, addEyes)() === ')-:', 'not so sad');

/**
 * Solution on "Create Function Composition".
 */

function composeV1 ( ...funcs ) {
    if ( !funcs.length ) {
        throw new SyntaxError('"compose" expected at least one argument, but got 0');
    }

    return function ( ...params ) {
        let result = funcs.pop()(...params);

        while ( funcs.length ) {
            result = funcs.pop()(result);
        }

        return result;
    };
}

function composeV2 ( ...funcs ) {
    const _compose = (fn1, fn2) => (...args) => fn1(fn2(...args));

    return funcs.reduce(_compose, n => n);
}
