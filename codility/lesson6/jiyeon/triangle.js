function solution(A) {
  const sorted = A.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] + sorted[i + 1] > sorted[i + 2]) {
      return 1;
    }
  }
  return 0;
}
