//87%
function solution(S) {
  let stack = [];
  for (i of S) {
    if (i === "(") {
      stack.push(i);
    } else {
      if (stack.length === 0) return 0;
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}

function solution(S) {
  let stack = [];
  for (i of S) {
    if (i === "(") {
      stack.push(i);
    } else {
      if (stack.length) stack.pop();
      else return 0;
    }
  }
  return stack.length ? 0 : 1;
}
