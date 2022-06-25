//첫 번째 코드(9%)

function solution(X, A) {
  for (let i = 0; i < A.length; i++) {
    if (X === A[i]) {
      return A[i] + 1;
    } else if (X === null) {
      return -1;
    }
  }
}

//정답 코드
function solution(X, A) {
  const leaves = new Set();

  for (let i = 0; i < A.length; i++) {
    const now = A[i];
    leaves.add(now);

    if (leaves.size === X) return i;
  }

  return -1;
}
