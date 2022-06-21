//53%
function solution(A) {
  const p = A.length - 1;
  let start = 0;
  let diffence = [];
  for (let i = 0; i < A.length - 1; i++) {
    start += A[i];
    const sum = A.slice(i + 1, A.length + 1).reduce(
      (prev, curr) => prev + curr,
      0
    );
    diffence.push(Math.abs(first - sum));
  }

  return Math.min(...diffence);
}
