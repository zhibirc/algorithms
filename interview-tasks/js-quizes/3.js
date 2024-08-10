// Run `node 3.js` to see results.

const log = (() => {
    let counter = 0;

    return fn => {
        counter += 1;

        try {
            console.log(`${counter})`, fn());
        } catch ( error ) {
            console.log(`${counter}) ${error?.constructor?.name}`);
        }
    };
})();

//1)
log(() => ['2', '4', '8'].map(parseInt));
//2)
log(() => new Map().set(NaN, 'something').get(NaN));
//3)
log(() => Promise.length + Promise.length);
// //4)
log(() => (f = (a, b = 2, c = 3) => a + b + c, f.length));
// //5)
log(() => Object.is(NaN, NaN));
// //6)
log(() => Object.getPrototypeOf(new Object('foo')).constructor);
// //7)
log(() => 0.2 + 0.5);
//8)
log(() => (({})?.foo ?? 'zoo'));
//9)
log(() => new Array(5).map((n, i) => i + 1));
//10)
log(() => 'abab'.replace(/(?=a)/g, '!'));
