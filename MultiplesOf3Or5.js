// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function solution(number) {
    let sumArray = [];
    let num = number - 1;
    while (num > 2) {
        if (num % 5 === 0) {
            sumArray.push(num);
        } else if (num % 3 === 0) {
            sumArray.push(num);
        }
        num = num - 1
    }
    if (sumArray.length > 0) {
        return sumArray.reduce((a, b) => a + b)
    } else {
        return 0;
    }
}