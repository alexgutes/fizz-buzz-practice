function countSheep(n) {
  if (n < 1) {
    console.log('zzzz');
    return;
  }
  console.log(`${n} - Another sheep jumps over the fence`);
  countSheep(n - 1);
}

countSheep(5);
