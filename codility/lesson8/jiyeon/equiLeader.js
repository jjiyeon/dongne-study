function solution(A) {
  let map = new Map();
  let max = 0;
  let index = 0;
  let result = 0;
  let count = 0; //리더값 갯수

  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) {
      map.set(A[i], Number(map.get(A[i])) + 1);
      if (max < map.get(A[i])) {
        max = map.get(A[i]);
        index = A[i];
      }
    } else {
      map.set(A[i], 1);
    }
  }

  if (max < A.length / 2) return 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === index) {
      count++;
      map.set(index, Number(map.get(index)) - 1);
    }
    if (map.get(index) > (A.length - (i + 1)) / 2 && count > (i + 1) / 2)
      result++;
  }
  return result;
}
