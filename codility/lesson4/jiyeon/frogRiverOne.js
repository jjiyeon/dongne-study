//0%
function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (X === 0 || A.length === 0) return -1;
  const max = Math.max(...A);
  const index = A.indexOf(max);
  return index;
}

//18%
function solution(X, A) {
  for (const [key, value] of A.entries()) {
    if (value === X) {
      return key;
    }
  }
  return -1;
}
//100%
function solution(X, A) {
  const fallingLeaves = new Set();
  for (const [key, value] of A.entries()) {
    fallingLeaves.add(value);
    if (fallingLeaves.size === X) {
      return key;
    }
  }
  return -1;
}
