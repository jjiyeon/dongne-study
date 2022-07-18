function solution(S) {
  let arr = [];

  for (let i = 0; i < S.length; i++) {
    let bracket = S[i];
    if (bracket === "(") {
      arr.push(bracket);
    } else {
      if (arr.length === 0) return 0;
      if (bracket === ")" && arr.pop() !== "(") return 0;
    }
  }
  if (arr.length !== 0) return 0;

  return 1;
}
