/**
 * https://www.hackerrank.com/challenges/array-left-rotation/problem
 * Sample input:
 *  5 4
 *  1 2 3 4 5
 *
 * Sample output:
 *  5 1 2 3 4
 *
 */

function leftRotation(n, d, arr) {
  const newArr = arr;
  for (let i = 0; i < d; i++) {
    newArr.push(newArr.shift());
  }
  return newArr;
}

console.log(leftRotation(5, 4, [1, 2, 3, 4, 5]));
