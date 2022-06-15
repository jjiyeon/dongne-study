function solution(A, K) {
  let arr = A.length == 0 ? [] : A;

  for (let i = 0; i < K; i++) {
    let last = arr.pop();
    arr.unshift(last);
  }

  return A;
}
