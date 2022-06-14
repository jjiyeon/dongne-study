/**
 * OddOccurenceInArray
 * [9,3,9,3,9,7,9] 등의 홀수로 이뤄진 배열 중, 짝을 이루지 않은 숫자값을 리턴하자
 * 1. 원본 배열을 돌면서
 * 2. 빈 set 객체에 하나씩 넣으면서 있는지 없는 지 확인해보고
 * 3. 남은 값을 리턴한다.
 *
 */
function solution(A) {
  let dataSet = new Set();
  for (let i in A) {
    if (!dataSet.has(A[i])) {
      dataSet.add(A[i]);
    } else {
      dataSet.delete(A[i]);
    }
  }

  return Array.from(dataSet)[0];
}
