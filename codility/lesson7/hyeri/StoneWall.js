function solution(H) {
  let countBlock = 0;
  let stack = [];

  for (let i in H) {
    while (stack.length && stack[stack.length - 1] > H[i]) {
      stack.pop();
    }

    if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
      stack.push(H[i]);
      countBlock++;
    }
  }

  return countBlock;
}

// 👉 참고 블로그: https://gist.github.com/minhoyooDEV/19556499e1bbdd0c9d413e71727fe0d6
