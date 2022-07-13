function solution(S) {
  const bracket1 = ["{", "}"];
  const bracket2 = ["[", "]"];
  const bracket3 = ["(", ")"];

  for (let i = 0; i <= S.length - 1; i++) {
    if (
      bracket1.includes(S[i]) ||
      bracket2.includes(S[i]) ||
      bracket3.includes(S[i])
    ) {
      console.log(S[i]);
    }
  }

  return 0;
}
console.log(solution("([)()]"));
