// 1차 코드 40%

function solution(N) {
  const numbers = N.toString(2);
  let binaryLength = 0;
  let substr = null;
  let splitList = numbers.split("1");

  if (splitList.length === numbers.length + 1 || splitList.length < 3) {
    return binaryLength;
  } else {
    substr = numbers.substring(numbers.indexOf("1") + 1, numbers.indexOf("1"));
    binaryLength = splitList[substr].length;

    return binaryLength;
  }
}

// 2차 수정해본 코드

function solution(N) {
  const numbers = N.toString(2);
  let binaryLength = 0;

  let substr = numbers.slice(
    numbers.indexOf("1") + 1,
    numbers.lastIndexOf("1")
  );
  let splitZero = substr.split("1").map((zeor) => zeor.length);

  binaryLength = splitZero.length ? Math.max(...splitZero) : 0;
  return binaryLength;
}
