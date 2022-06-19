function solution(A) {
  const sortigA = A.sort((a, b) => a - b);
  let result = 0;
  for (elem in sortigA) {
    if (sortigA[elem] != elem) {
      result = sortigA[elem] - 1;
    }
  }
  return result;
}
