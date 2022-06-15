/**
 * 문제 해결
 * 1. 마지막을 찾기
 * 2. 배열에서 마지막을 자르고
 * 3. 앞에다가 마지막 삽입
 *
 * solution1 87% 통과
 * -> 빈배열일 경우 통과 못함
 */

function solution1(A, K) {
  let resultList = A;
  for (let i = 0; i < K; i++) {
    let last = resultList[resultList.length - 1];
    resultList.pop();
    resultList.unshift(last);
  }
  return resultList;
}
