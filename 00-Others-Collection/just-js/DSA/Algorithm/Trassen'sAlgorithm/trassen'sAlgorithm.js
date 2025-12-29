const strassen = (A, B) => {
  const n = A.length;
  if (n === 1) return [[A[0][0] * B[0][0]]];

  const mid = Math.floor(n / 2);
  const a11 = splitMatrix(A, 0, 0);
  const a12 = splitMatrix(A, 0, mid);
  const a21 = splitMatrix(A, mid, 0);
  const a22 = splitMatrix(A, mid, mid);
  const b11 = splitMatrix(B, 0, 0);
  const b12 = splitMatrix(B, 0, mid);
  const b21 = splitMatrix(B, mid, 0);
  const b22 = splitMatrix(B, mid, mid);

  const m1 = strassen(add(a11, a22), add(b11, b22));
  const m2 = strassen(add(a21, a22), b11);
  const m3 = strassen(a11, subtract(b12, b22));
  const m4 = strassen(a22, subtract(b21, b11));
  const m5 = strassen(add(a11, a12), b22);
  const m6 = strassen(subtract(a21, a11), add(b11, b12));
  const m7 = strassen(subtract(a12, a22), add(b21, b22));

  const c11 = add(subtract(add(m1, m4), m5), m7);
  const c12 = add(m3, m5);
  const c21 = add(m2, m4);
  const c22 = add(subtract(add(m1, m3), m2), m6);

  return combineMatrices(c11, c12, c21, c22);
};

const splitMatrix = (matrix, row, col) => {
  return matrix.slice(row, row + 1).map((r) => r.slice(col, col + 1));
};

const add = (A, B) => {
  return A.map((row, i) => row.map((val, j) => val + B[i][j]));
};

const subtract = (A, B) => {
  return A.map((row, i) => row.map((val, j) => val - B[i][j]));
};

const combineMatrices = (c11, c12, c21, c22) => {
  const top = c11.map((row, i) => row.concat(c12[i]));
  return top.concat(c21.map((row, i) => row.concat(c22[i])));
};

// Example usage
const A = [
  [1, 2],
  [3, 4],
];
const B = [
  [5, 6],
  [7, 8],
];
console.log(strassen(A, B)); // Output: [[19, 22], [43, 50]]
