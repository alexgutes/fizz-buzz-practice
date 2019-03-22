function sumOf(list) {
  // Base case
  if (list.length === 1) {
    return list[0];
  }
  // General case
  return list[0] + sumOf(list.splice(1));
}

const lst = [2, 4, 6, 8, 10];
console.log(sumOf(lst));
