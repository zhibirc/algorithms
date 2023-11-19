/**
 * Find all possible pathways in given square matrix from one cell to another.
 *
 * The task is to determine the total amount of pathways from the starting cell
 * to the finishing one. The path is defined as an arbitrary combination of two kinds of steps:
 * - step to the next cell on TOP, i.e. if we are on the step y move to y + 1
 * - step to the next cell on RIGHT, i.e. if we are on the step x move to x + 1
 *
 * This is a Combinatorics task which can be solved using Dynamic Programming.
 */

function getAllPaths (matrixSize: number): number {
    // notice that we haven't to fulfill the whole matrix to solve the task
    // we only need one row on top and one column on the right which we could reuse
    // @todo implement
}

type TResult = {
    total: number;
    matrix: Array<Array<number>>;
};

function getAllPathsVisualize (matrix: Array<Array<any>>): TResult {
    // prevent mutation of referenced array
    const filledMatrix = Array.from(matrix, row => [...row]);
    const matrixSize = matrix.length;

    // if we are on the top-most row we have only one pathway -- strictly to the right
    for (let i = 0; i < matrixSize; i += 1) {
        filledMatrix[0][i] = 1;
    }

    // if we are on the right-most column we have only one pathway -- strictly to the top
    for (let i = 0; i < matrixSize; i += 1) {
        filledMatrix[i][matrixSize - 1] = 1;
    }

    // compute cell values basing on the values in siblings
    for (let i = 1, j = matrixSize - 2; i < matrixSize; i += 1, j -= 1) {
        for (let k = j; k >= 0; k -= 1) {
            filledMatrix[i][k] = filledMatrix[i - 1][k] + filledMatrix[i][k + 1];
        }

        for (let k = i; k < matrixSize; k += 1) {
            filledMatrix[k][j] = filledMatrix[k - 1][j] + filledMatrix[k][j + 1];
        }
    }

    return {
        total: filledMatrix[matrixSize - 1][0],
        matrix: filledMatrix
    };
}

function test() {
    const matrix = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];

    const result = getAllPathsVisualize(matrix);

    console.assert(result.total === 70, 'Invalid total number of possible pathways');
    console.assert(
        JSON.stringify(result.matrix) === '[[1,1,1,1,1],[5,4,3,2,1],[15,10,6,3,1],[35,20,10,4,1],[70,35,15,5,1]]',
        'Invalid resulting matrix'
    );

    console.table(result.matrix);
}