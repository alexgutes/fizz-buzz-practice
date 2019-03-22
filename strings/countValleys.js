function countingValleys(n, s) {
  let countValleys = 0;
  let level = 0;
  const arr = s.split('');
  for (let i = 0; i < n; i += 1) {
    if (arr[i] === 'U') level += 1;
    if (arr[i] === 'D') level -= 1;

    if (level === 0 && arr[i] === 'U') countValleys += 1;
  }
  return countValleys;
}
console.log(countingValleys(8, 'UDDDUDUU'));
