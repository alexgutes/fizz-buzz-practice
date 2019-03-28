function fizzBuzz(n) {
  for (let i = 0; i <= n; i += 1) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FIZZBUZZ');
    } else if (i % 5 === 0) {
      console.log('FIZZ');
    } else if (i % 3 === 0) {
      console.log('BUZZ');
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(15);

// function reverseArray(a) {
//   const result = [];
//   for (let i = a.length - 1; i >= 0; i--) {
//     result.push(a[i]);
//   }
//   console.log(result);
//   return result;
// }

function reverseArray2(a) {
  return a.reverse();
}

console.log(reverseArray2([2, 3, 4, 5]));
