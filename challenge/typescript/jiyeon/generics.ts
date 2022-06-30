// last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.
// prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.
// by. ejy1105

type returnAll = <T>(arr: T[], item?: T) => T[] | T;

type returnLast = <T>(arr: T[]) => T;

const prepend: returnAll = (arr, item) => {
  if (item) {
    arr.unshift(item);
    return arr;
  } else {
    return arr[arr.length - 1];
  }
};
const last: returnLast = (arr) => {
  return arr[arr.length - 1];
};

console.log(last([1, 2, 3, 5]));
console.log(prepend([1, 2, 3, 4], 7));
