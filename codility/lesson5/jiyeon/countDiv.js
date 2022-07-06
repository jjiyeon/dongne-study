//12%
function solution(A, B, K) {
  let count = 0;
  for (let i = A; i < B; i++) {
    if (i % K === 0) {
      count++;
    }
  }
  return count;
}

function solution(A, B, K) {
  let count = parseInt(B / K) - parseInt(A / K);
  if (A % K === 0) count += 1;
  return count;
}
