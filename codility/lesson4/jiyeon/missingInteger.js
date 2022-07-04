//11%..ㅋㅋㅋ
function solution(A) {
  const sortingA = [...new Set(A.sort())];
  let sum = sortingA.reduce((a, b) => a + b, 0);
  let sumB = Array.from({ length: A.length }, (v, i) => i + 1).reduce(
    (a, b) => a + b,
    0
  );
  if (Math.sign(sum) === -1) return 1;
  if (sum === sumB) {
    return sortingA.length + 1;
  } else {
    return sumB - sum;
  }
}

//44%
function solution(A) {
  const sortingA = [...new Set(A.sort())];
  let min = 1;
  for (i in sortingA) {
    if (sortingA[i] > 0 && sortingA[i] === min) {
      min++;
    }
  }
  return min;
}
//100%
function solution(A) {
  const sortingA = new Set(A.sort());
  let min = 1;
  for (i of sortingA) {
    if (sortingA.has(min)) {
      min++;
    }
  }
  return min;
}
