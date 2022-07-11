//배열의 3 원소를 곱해서 가장 큰 수가 나오는 값을 return 해주면 된다.
//먼저, 배열 A를 오름 차순으로 정렬해준다.
//만약 배열의 모든 수가 음수나 양수라면, 아래 코드에서는 n이 최대 값이 된다.
//이 때, 함정이 음수와 양수가 함께 있을 경우이다.
//음수는 절대값이 클 수록 왼쪽으로 정렬되기 때문에 절대값이 큰 A[0] * A[1]을 해서 두 음수를 곱해 양수가 되는 경우를 생각해주고,
//마지막으로 가장 큰 수 A[A.length]를 곱해준다.
//👉 참고 블로그 : https://sustainable-dev.tistory.com/13

function solution(A) {
  A.sort((a, b) => {
    return a - b;
  });

  const n = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  const m = A[0] * A[1] * A[A.length];

  return Math.max(n, m);
}
