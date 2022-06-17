//첫 번째 코드
function solution(A) {
  const setNumber = new Set();
  let result = [];

  for (let i = 0; i < A.length; i++) {
    if (!setNumber.has(A[i])) {
      setNumber.add(A[i]);
    } else {
      setNumber.delete(A[i]);
    }
    result = [...setNumber];
  }

  return result;
}

//두 번째 코드
function solution(A) {
  let element = new Set();

  for (let i in A) {
    if (!element.has(A[i])) {
      element.add(A[i]);
    } else {
      element.delete(A[i]);
    }
  }

  const result = [...element];
  return result[0];
}
