// Run `node 1.js` to see results.

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
log(() => parseInt(Symbol()));
//2)
log(() => typeof []);
//3)
log(() => this);
//4)
log(() => 0.1 + 0.2);
//5)
log(() => !1);
//6)
log(() => 0 / 0);
//7)
log(() => [2, 1, 4, 3].sort((a, b) => b - a));
//8)
log(() => JSON.stringify(this));
//9)
log((a = 100) => arguments);
//10)
log(() => 'Happy New Year!'.replace(/a(.)\1/, '$&*'));
