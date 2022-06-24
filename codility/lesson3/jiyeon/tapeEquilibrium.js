//53%
function solution(A) {
  let first = 0;
  let diffence = [];
  for (let i = 0; i < A.length - 1; i++) {
    first += A[i];
    const sum = A.slice(i + 1, A.length + 1).reduce(
      (prev, curr) => prev + curr,
      0
    );
    diffence.push(Math.abs(first - sum));
  }

  return Math.min(...diffence);
}
//100%
function solution(A) {
  let sum = A.reduce((a, b) => a + b, 0);
  let sumFirst = 0;
  let temp = [];
  for (let i = 0; i < A.length - 1; i++) {
    sumFirst += A[i];
    sum -= A[i];
    temp[i] = Math.abs(sumFirst - sum);
  }
  return Math.min(...temp);
}
