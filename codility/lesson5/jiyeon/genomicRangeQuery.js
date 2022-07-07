// 62%
function solution(S, P, Q) {
  const dna = { A: 1, C: 2, G: 3, T: 4 };
  let leng = [];
  let min = 4;
  let result = [];
  for (let i in P) {
    leng.push(S.substring(P[i], Q[i] + 1));
  }
  for (let i in leng) {
    for (let j in leng[i]) {
      if (min > dna[leng[i][j]]) {
        min = dna[leng[i][j]];
      }
    }
    result.push(min);
    min = 4;
  }
  return result;
}
