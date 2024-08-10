// Run `node 2.js` to see results.

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
log(() => NaN === NaN);
//2)
log(() => 3.14.toFixed(3));
//3)
log(() => Math.hypot(3, 4));
//4)
log(() => '192.168.1.1'.match(/.$/));
//5)
log(() => Date.now() === new Date().getTime());
//6)
log(() => Math.random() > 1);
//7)
log(() => 2 === 2 === 2);
//8)
log(() => Object.keys({[Symbol('zoo')]: 'value'}));
//9)
log(() => Object.getPrototypeOf(Object.create(null)));
//10)
log(() => ([a = 100, b = a] = [void 0, null], [a, b]));
