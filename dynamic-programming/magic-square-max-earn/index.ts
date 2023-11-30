/**
 * Find max possible earn among all pathways from point A to B in given square matrix.
 * Find such pathway itself (the one where total earnings is maximized).
 *
 * @todo: add detailed description
 */

type TResult = {
    maxEarn: number;
    matrix: Array<Array<number>>;
    path: Array<Array<number>>;
};

function getPathMaxEarn (matrix: Array<Array<number>>): TResult {
    // prevent mutation of referenced array
    const filledMatrix = Array.from(matrix, row => [...row]);
    const matrixSize = matrix.length;
    const path = [];

    // for the topmost row the max earn for each cell is just the sum of all earnings
    // in all cells to the right, since we could move only in one direction - to the right
    for (let i = matrixSize - 1, sum = 0; i >= 0; i -= 1) {
        sum += matrix[0][i];
        filledMatrix[0][i] = sum;
    }

    // for the rightmost column the max earn for each cell is just the sum of all earnings
    // in all cells to the top, since we could move only in one direction - to the top
    for (let i = 0, sum = 0; i < matrixSize; i += 1) {
        sum += matrix[i][matrixSize - 1]
        filledMatrix[i][matrixSize - 1] = sum;
    }

    // compute preferred/maximum earn for each cell basing on the values in siblings
    // store argmax for pathway restoring
    for (let i = 1, j = matrixSize - 2; i < matrixSize; i += 1, j -= 1) {
        for (let k = j; k >= 0; k -= 1) {
            if (filledMatrix[i - 1][k] >= filledMatrix[i][k + 1]) {
                filledMatrix[i][k] = filledMatrix[i][k] + filledMatrix[i - 1][k];
            } else {
                filledMatrix[i][k] = filledMatrix[i][k] + filledMatrix[i][k + 1];
            }
        }

        for (let k = i; k < matrixSize; k += 1) {
            filledMatrix[k][j] = filledMatrix[k][j] + Math.max(filledMatrix[k - 1][j], filledMatrix[k][j + 1]);
        }
    }

    return {
        maxEarn: filledMatrix[matrixSize - 1][0],
        matrix: filledMatrix,
        path
    };
}