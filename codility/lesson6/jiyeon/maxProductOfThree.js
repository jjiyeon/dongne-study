//33%
function solution(A) {
  const filterA = A.filter((x) => x > -1).sort((a, b) => b - a);
  let result = 1;
  for (let i = 0; i < 3; i++) {
    result = filterA[i] * result;
  }
  return result;
}

//44%
function solution(A) {
  const filterA = A.filter((x) => x > -1).sort((a, b) => b - a);
  let result = 1;

  if (filterA.length === 0) {
    A.sort((a, b) => a - b);
    result = A[0] * A[1] * A[2];
  } else {
    for (let i = 0; i < 3; i++) {
      result = filterA[i] * result;
    }
  }
  return result;
}

///100%
function solution(A) {
  const sorted = A.sort((a, b) => b - a);
  const size = sorted.length;
  let result = sorted[0] * sorted[1] * sorted[2];

  if (sorted[size - 1] < 0 && sorted[size - 2] < 0 && sorted[0] > 0) {
    let big = sorted[size - 1] * sorted[size - 2] * sorted[0];
    if (big > result) result = big;
  }
  return result;
}
