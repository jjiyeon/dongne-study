//33%
function solution(A) {
  const filterA = A.filter((x) => x > -1).sort((a, b) => b - a);
  let result = 1;
  for (let i = 0; i < 3; i++) {
    result = filterA[i] * result;
  }
  return result;
}
