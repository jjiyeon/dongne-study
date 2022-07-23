//91%
function solution(A) {
  let result = 0;
  let resultArr = [];
  let count = A.reduce((allCount, item) => {
    if (item in allCount) {
      allCount[item]++;
    } else {
      allCount[item] = 1;
    }
    return allCount;
  }, {});
  for (item in count) {
    if (count[item] > A.length / 2) {
      result = Number(item);
    }
  }
  for (item in A) {
    if (A[item] === result) resultArr.push(Number(item));
  }

  return resultArr.length ? resultArr[0] : -1;
}
//100
function solution(A) {
  let result = 0;
  let resultArr = [];
  let count = A.reduce((allCount, item) => {
    if (item in allCount) {
      allCount[item]++;
    } else {
      allCount[item] = 1;
    }
    return allCount;
  }, {});

  for (item in count) {
    if (count[item] > A.length / 2) {
      result = Number(item);
    }
  }
  if (result > 0) {
    for (item in A) {
      if (A[item] === result) resultArr.push(Number(item));
    }
  }

  return resultArr.length ? resultArr[0] : -1;
}
