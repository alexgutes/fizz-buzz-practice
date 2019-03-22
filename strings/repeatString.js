/**
 * input
 * aba 10
 *
 * output
 * 7
 * aba aba aba a
 *
 */

function countA(s, n) {
  let charArray = s.split();
  let count = 0;
  while (charArray.length < n) {
    for (let i = 0; i < charArray.length; i += 1) {
      if (charArray[i] === 'a') {
        count += 1;
      }
    }
    charArray += s.split();
  }
  return count;
}

console.log(countA('a', 1000000000000));
