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
