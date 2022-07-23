//0%
function solution(A) {
  let count = 0;
  let leftHalf = A.slice(0, A.length / 2);
  let rightHalf = A.slice(A.length / 2, A.length);
  let resultA = 0;
  let resultB = 0;
  let calcA = leftHalf.reduce((all, item) => {
    if (item in all) {
      all[item]++;
    } else {
      all[item] = 1;
    }
    return all;
  }, {});
  let calcB = rightHalf.reduce((all, item) => {
    if (item in all) {
      all[item]++;
    } else {
      all[item] = 1;
    }
    return all;
  }, {});

  for (i in calcA) {
    if (calcA[i] > leftHalf.length / 2) {
      resultA = Number(i);
      count++;
    }
  }
  for (i in calcB) {
    if (calcB[i] > rightHalf.length / 2) {
      resultB = Number(i);
    }
  }

  return resultA === resultB ? count + 1 : count;
}
