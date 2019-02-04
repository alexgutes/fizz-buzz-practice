// input: [1, 5] === 1, 2, 3, 4, 5,
// expected output: [1, 3, 5]

function listPrimes(n) {
  const list = [];
  const output = [];
  // Make an array from 2 to (n-1)
  for (let i = 0; i < n; i += 1) {
    list.push(true);
  }
  // remove multiples of primes starting from 2,3,5...
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (list[i]) {
      for (let j = i * i; j < n; j += i) {
        list[j] = false;
      }
    }
  }

  // All array[i] set to ture are primes
  for (let i = 2; i < n; i += 1) {
    if (list[i]) {
      output.push(i);
    }
  }
  return output;
}

console.log(listPrimes(30));
