//44%
function solution(A) {
  let max = 0;
  let min = Math.min(...A);
  for (let i = 0; i < A.length; i++) {
    if (i > 0 && max < A[i]) {
      max = A[i];
    }
    if (i < A.length - 1 && min > A[i]) {
      min = A[i];
    }
  }
  return max - min > 0 ? max - min : 0;
}

//100%

function solution(A) {
  let start = 0;
  let end = 0;
  let max = 0;

  while (end < A.length) {
    const profit = A[end] - A[start];
    if (profit < 0) start = end;
    if (max < profit) max = profit;

    end++;
  }

  return max;
}
