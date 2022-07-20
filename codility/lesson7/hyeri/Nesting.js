function solution(S) {
  let arr = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      arr.push(S[i]);
    } else {
      if (arr.length === 0) return 0;
      if (S[i] === ")" && arr.pop() !== "(") return 0;
    }
  }
  if (arr.length !== 0) return 0;

  return 1;
}
