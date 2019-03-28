function solution(A) {
  const sumList = [];
  let tempSum = 0;
  for (let i = 0; i < A.length; i += 1) {
    tempSum += A[i];
    sumList[i] = tempSum;
  }
  for (let i = 0; i < A.length - 1; i += 1) {
    for (let j = i + 1; j < A.length - 1; j += 1) {
      const first = sumList[i] - A[i];
      const second = sumList[j] - sumList[i] - A[j];
      const third = sumList[A.length - 1] - sumList[j];

      if (first === second && second === third) return true;
    }
  }
  return false;
}
console.log(solution([1, 1, 1, 1, 1, 1]));
