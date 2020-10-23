module.exports = function towelSort (matrix) {
  if (matrix == null) return [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0 || i == 0) {
      matrix[i].flat(Infinity);
    }
    else matrix[i].reverse();
  } 
  return matrix.flat(Infinity);
}
