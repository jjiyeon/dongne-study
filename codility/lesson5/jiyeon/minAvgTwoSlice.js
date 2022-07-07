// 정답 예시풀이
function solution(A) {
  let min = Number.MAX_SAFE_INTEGER;
  let minIndex = 0;
  for (let i = 0; i < A.length - 1; i++) {
    let twoSum = (A[i] + A[i + 1]) / 2;

    if (min > twoSum) {
      min = twoSum;
      minIndex = i;
    }

    if (i + 2 <= A.length - 1) {
      let threeSum = (A[i] + A[i + 1] + A[i + 2]) / 3;

      if (min > threeSum) {
        min = threeSum;
        minIndex = i;
      }
    }
  }

  return minIndex;
}
