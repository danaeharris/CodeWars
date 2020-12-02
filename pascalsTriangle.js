// In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula (n k) = n!/(n-k)!, where n denotes a row of the triangle, and k is a position of a term in the row.

// Pascal's Triangle

// You can read Wikipedia article on Pascal's Triangle for more information.

// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

// n guarantees that terms of the Triangle won't overflow.

// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// n = 5: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1,  1, 4, 6, 4, 1]

function pascalsTriangle(n) {
    let triangle = [];
    let previousRow = [];
    for (let row = 1; row <= n; row++) {
        let currentRow = [];
        for (let item = 0; item < row; item++) {
            if (item === 0 || item === row - 1) {
                currentRow.push(1);
            } else {
                currentRow.push(previousRow[item - 1] + previousRow[item]);
            }
        }
        previousRow = currentRow;
        triangle = triangle.concat(currentRow);
    }
    return triangle;
}

