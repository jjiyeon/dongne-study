function solution(N) {
  const binary = N.toString(2);
  const trimmed = binary.substr(0, binary.lastIndexOf("1") + 1);
  return Math.max(...trimmed.split("1").map((item) => item.length));
}

console.log(solution(1041));
