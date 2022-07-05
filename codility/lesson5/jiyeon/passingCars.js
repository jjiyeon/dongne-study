function solution(A) {
  let east = 0;
  let count = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] == 0) east++;
    else count += east;
  }
  if (count > 1000000000) return -1;
  return count;
}
