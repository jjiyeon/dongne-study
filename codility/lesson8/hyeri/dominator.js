function solution(A) {
  const map = new Map();
  let answer = -1;

  A.forEach((v, i) => {
    map.set(v, map.has(v) ? [map.get(v)[0] + 1, i] : [1, i]);
  });

  for (let v of map.values()) {
    if (v[0] > Math.floor(A.length / 2)) answer = v[1];
  }

  return answer;
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
