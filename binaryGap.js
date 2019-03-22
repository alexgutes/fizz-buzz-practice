function solution(n) {
  let binary;
  let tempGap = 0;
  let finalGap = 0;
  binary = n.toString(2)
  console.log(binary);
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0') {
      tempGap++;
    } else if (binary[i] === '1') {
      if (tempGap > finalGap)
        finalGap = tempGap;
      tempGap = 0;
    }

  }

  return finalGap;
}


console.log(solution(Math.floor((Math.random() * 100000) + 1)));