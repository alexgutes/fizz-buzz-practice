function isPrime(n) {
  if (n === 1) {
    console.log(`${n} is NOT prime`);
    return 'not ';
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(`${n} is NOT prime`);
      return false;
    }
  }
  console.log(`${n} is prime`);
  return true;
}

console.log(isPrime(3));
