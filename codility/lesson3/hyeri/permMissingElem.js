//첫 번째 코드(50%);

function solution(A) {
  A.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < A.length; i++) {
    if (i + 1 !== A[i]) {
      return i + 1;
    }
  }
}
