//44%
function solution(N, A) {
  let counter = Array.from({ length: N }, () => 0);
  for (const [key, value] of A.entries()) {
    if (value <= N) {
      counter[value - 1] += 1;
    } else {
      const max = Math.max(...counter);
      counter = Array.from({ length: N }, () => max);
    }
  }
  return counter;
}
//77%
function solution(N, A) {
  let counter = Array.from({ length: N }, () => 0);
  let max = 0;
  for (value of A) {
    if (value <= N) {
      counter[value - 1] += 1;
      // max = max < counter[value - 1] ? counter[value - 1] : max;
      max = Math.max(counter[value - 1], max);
    } else {
      //counter = Array.from({ length: N }, () => max);
      counter.fill(max);
    }
  }
  return counter;
}
