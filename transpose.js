/**
 * Given a 2-dimensional matrix, returns the transpose of the
 * matrix
 * @author racheldesa@outlook.com
 * @param {number[][]} matrix of dimensions ixj
 * @return {number[][]} transpose matrix of dimensions jxi
 */
var transpose = function(matrix) {
    let tpose = [];
    for (let i=0;i<matrix[0].length;i++) {
        let newRow = [];
        for (let j=0;j<matrix.length;j++) {
            newRow.push(matrix[j][i]);
        }
        tpose.push(newRow);
    }
    return tpose;
};