const input = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourglassSum(arr) {
  const results = [];
  let sum;
  for (let f = 0; f < 4; f += 1) {
    for (let j = 0; j < 4; j += 1) {
      sum =
        arr[f][j] +
        arr[f][j + 1] +
        arr[f][j + 2] +
        arr[f + 1][j + 1] +
        arr[f + 2][j] +
        arr[f + 2][j + 1] +
        arr[f + 2][j + 2];
      results.push(sum);
    }
  }
  return results.reduce((a, b) => Math.max(a, b));
}
console.log(hourglassSum(input));
