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

//두 번째 코드(100%)

function solution(A) {
  if (A.length === 0) {
    return 1;
  }

  A.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < A.length; i++) {
    if (i + 1 !== A[i]) {
      return i + 1;
    }
  }
  return A.length + 1;
}
