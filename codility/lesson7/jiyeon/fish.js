//25%
function solution(A, B) {
  let size = 0;
  let count = B.length;
  for (i in B) {
    if (B[i] === 1) {
      size = A[i];
    } else if (B[i] === 0 && size > 0) {
      count--;
    } else {
      size = A[i];
    }
  }
  return count;
}

//100%
function solution(A, B) {
  let stack = [];
  let count = 0;
  for (i in B) {
    let curr = B[i];
    if (curr === 1) {
      stack.push(A[i]);
    } else {
      while (stack.length > 0) {
        if (stack[stack.length - 1] > A[i]) {
          break;
        } else {
          stack.pop();
        }
      }
      if (stack.length === 0) count++;
    }
  }
  return count + stack.length;
}
