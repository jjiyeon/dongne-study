//첫 번째 코드 (50%)
function solution(A) {
  A.sort();

  const fitNum = A[0];

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== fitNum + i) return 0;
  }
  return 1;
}
