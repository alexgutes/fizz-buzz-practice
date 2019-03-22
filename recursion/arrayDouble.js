function doubleNumbers(arr) {
  if (arr.length === 0) return [];

  return [arr[0] * 2, ...doubleNumbers(arr.splice(1))];
}

const numbers = [1, 2, 3];
console.log(doubleNumbers(numbers));
