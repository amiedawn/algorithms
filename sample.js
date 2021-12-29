function findNumber(values) {
  let result = [];
  for (let i = 0; i < values.length; ++i) {
    if (0 <= values[i]) {
      result[values[i]] = true;
    }
  }

  for (let j = 1; j <= result.length; ++j) {
    if (undefined === result[j]) {
      return j;
    }
  }

  return 1;
}

console.log(
  findNumber([1, 3, 6, 4, 1, 2]),
  findNumber([1, 2, 3]),
  findNumber([-1, -3, 1, 2]),
  findNumber([-1, -3]),
  findNumber([])
);
