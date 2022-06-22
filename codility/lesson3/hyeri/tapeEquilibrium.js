//첫 번째 코드(53%)

function solution(A) {
  let min = null;

  for (let i = 0; i < A.length - 1; i++) {
    let sum = 0;
    let sum2 = 0;
    const num = A.slice(0, i + 1);
    const num2 = A.slice(i + 1);

    for (let j = 0; j < num.length; j++) {
      sum = sum + num[j];
    }

    for (let j = 0; j < num2.length; j++) {
      sum2 = sum2 + num2[j];
    }

    const result = Math.abs(sum - sum2);

    if (min === null || min > result) {
      min = result;
    }
  }

  return min;
}
