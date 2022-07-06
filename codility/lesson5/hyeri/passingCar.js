function solution(A) {
  let totalCount = 0,
    eastCar = 0;
  for (let i in A) {
    if (A[i] == 0) {
      eastCar += 1;
    } else {
      totalCount += eastCar;
    }
  }

  if (totalCount > 1000000000) return -1;

  return totalCount;
}
