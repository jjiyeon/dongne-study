function solution(X, Y, D) {
  let position = X;
  let count = 0;
  while (position < Y) {
    position += D;
    count++;
  }
  return count;
}

function solution2(X, Y, D) {
  return Math.ceil((Y - X) / D);
}
