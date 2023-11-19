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

// Notice that we haven't to fulfill the whole matrix to solve the task,
// we only need one row on top and one column on the right which we could reuse.
// But even this is redundant. If we're looking closely we could discover Pascal's triangle
// formed by diagonals of our square matrix.
function getAllPaths (matrixSize: number): number {
    // second row of Pascal's triangle
    let dpTable = [1, 1];
    
    for (let i = 3; i <= matrixSize; i += 1) {
        const tmp = Array(i).fill(1);
        for (let j = 1; j < i - 1; j += 1) {
            tmp[j] = dpTable[j - 1] + dpTable[j];
        }
        dpTable = tmp;
    }

    for (let i = matrixSize - 1; i >= 2; i -= 1) {
        const tmp: Array<number> = [];
        for (let j = 0; j < i; j += 1) {
            tmp[j] = dpTable[j] + dpTable[j + 1];
        }
        dpTable = tmp;
    }

    return dpTable[0] + dpTable[1];
}

type TResult = {
    total: number;
    matrix: Array<Array<number>>;
};

function getAllPathsVisualize (matrix: Array<Array<any>>): TResult {
    // prevent mutation of referenced array
    const filledMatrix = Array.from(matrix, row => [...row]);
    const matrixSize = matrix.length;

    // if we are on the topmost row we have only one pathway -- strictly to the right
    for (let i = 0; i < matrixSize; i += 1) {
        filledMatrix[0][i] = 1;
    }

    // if we are on the rightmost column we have only one pathway -- strictly to the top
    for (let i = 1; i < matrixSize; i += 1) {
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

    const result1 = getAllPaths(matrix.length);
    const result2 = getAllPathsVisualize(matrix);

    console.assert(result1 === 70, 'Invalid total number of possible pathways in "getAllPaths"');
    console.assert(result2.total === 70, 'Invalid total number of possible pathways "getAllPathsVisualize"');
    console.assert(
        JSON.stringify(result2.matrix) === '[[1,1,1,1,1],[5,4,3,2,1],[15,10,6,3,1],[35,20,10,4,1],[70,35,15,5,1]]',
        'Invalid resulting matrix'
    );

    console.table(result2.matrix);
}