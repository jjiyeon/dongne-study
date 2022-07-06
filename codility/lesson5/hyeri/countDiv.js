//첫 번째 코드(50%)
function solution(A, B, K) {
  const arr = [];
  for (let i = A; i <= B; i++) {
    arr.push(i);
  }
  const result = arr.filter((num) => num % K === 0);
  return result.length;
}

//두 번째 코드(50%)
function solution(A, B, K) {
  const arr = [];

  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      arr.push(i);
    }
  }
  return arr.length;
}

//세 번째 코드(50%)
function solution(A, B, K) {
  let answer = 0;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      answer += 1;
    }
  }
  return answer;
}

//참고 블로그 👉 https://sustainable-dev.tistory.com/12
function solution(A, B, K) {
  let cnt = parseInt(B / K) - parseInt(A / K);
  if (A % K === 0) cnt += 1;
  return cnt;
}
