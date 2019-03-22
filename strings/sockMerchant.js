/**
 *  input
 * 9
 * 10 20 20 10 10 30 50 10 20
 *
 * output
 * 3
 *
 * loop thru array build an object with each color : count
 * for each color sock, if count > 2 and count is even, store the number of pairs (count / 2)
 * return number of pairs
 *
 */

function sockMerchant(n, ar) {
  let count = 0;
  const sockObj = {};
  for (let i = 0; i < n; i += 1) {
    if (sockObj[ar[i]]) {
      sockObj[ar[i]] += 1;
    } else sockObj[ar[i]] = 1;
  }

  Object.keys(sockObj).forEach(key => {
    if (sockObj[key] > 2) {
      count += Math.floor(sockObj[key] / 2);
    }
  });

  return count;
}

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(9, socks));

function sockMerchant2(n, ar) {
  const singles = {};
  let pairs = 0;
  for (let i = 0; i < n; i += 1) {
    if (singles.hasOwnProperty(ar[i])) {
      pairs += 1;
      delete singles[ar[i]];
    } else {
      singles[ar[i]] = true;
    }
  }
  return pairs;
}

console.log('optimized', sockMerchant2(9, socks));
