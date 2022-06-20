//0
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

// 50%
function solution(A) {
  let setA = new Set(A);
  let array = [...Array(A.length).keys()].map((key) => key + 1);
  let result = 0;
  for (elem of array) {
    if (!setA.has(elem)) {
      result = elem;
    }
  }
  return result;
}

//100%
function solution(A) {
  if (A.length === 0) return 1;
  const sum = ((A.length + 2) * (A.length + 1)) / 2;
  const missing = A.reduce((pre, curr) => pre + curr, 0);
  return sum - missing;
}
