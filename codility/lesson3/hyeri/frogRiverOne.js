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
