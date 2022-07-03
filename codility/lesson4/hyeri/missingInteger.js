// 첫 번째 코드(100%)
function solution(A) {
  const num = new Set(A);

  for (let i = 1; i <= num.size; i++) {
    if (!num.has(i)) {
      return i;
    }
  }
  return num.size + 1;
}
