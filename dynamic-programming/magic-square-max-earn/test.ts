function test() {
    const matrix = [
        [ 5,  -9,  44, 127, -13],
        [91,  23, 106, -30,  80],
        [-8,   0, -28,  34, -27],
        [ 7, 133, -76, 100,  55],
        [29,   4,  18,  25,  -5],
    ];

    const result = getPathMaxEarn(matrix);

    console.table(result.matrix);
}