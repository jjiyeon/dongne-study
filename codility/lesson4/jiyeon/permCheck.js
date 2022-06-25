//75%
function solution(A) {
  let sumA = A.reduce((a, b) => a + b, 0);
  let sumB = Array.from({ length: A.length }, (v, i) => i + 1).reduce(
    (a, b) => a + b,
    0
  );
  if (sumA === sumB) return 1;

  return 0;
}

//83%
function solution(A) {
  let sortA = A.sort();
  if (sortA[0] !== 1) return 0;

  let sumA = A.reduce((a, b) => a + b, 0);
  let sumB = Array.from({ length: A.length }, (v, i) => i + 1).reduce(
    (a, b) => a + b,
    0
  );
  if (sumA === sumB) {
    return 1;
  } else {
    return 0;
  }
}

//100%
function solution(A) {
  let sortA = A.sort();
  if (sortA[0] !== 1) return 0;
  let setA = new Set(sortA);
  if (setA.size !== sortA.length) return 0;

  let sumA = A.reduce((a, b) => a + b, 0);
  let sumB = Array.from({ length: A.length }, (v, i) => i + 1).reduce(
    (a, b) => a + b,
    0
  );
  if (sumA === sumB) {
    return 1;
  } else {
    return 0;
  }
}
