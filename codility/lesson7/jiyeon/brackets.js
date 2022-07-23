function solution(S) {
  let stack = [];
  let popItem = "";
  for (i of S) {
    if (i === "{" || i === "[" || i === "(") {
      stack.push(i);
    } else {
      if (stack.length === 0) return 0;
      popItem = stack.pop();
      if (i === ")" && popItem !== "(") {
        return 0;
      }
      if (i === "]" && popItem !== "[") {
        return 0;
      }
      if (i === "}" && popItem !== "{") {
        return 0;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}
