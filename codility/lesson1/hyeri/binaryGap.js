function solution(N) {
  const binary = N.toString(2);
  const trimmed = binary.substr(0, binary.lastIndexOf("1") + 1);
  return Math.max(...trimmed.split("1").map((item) => item.length));
}

console.log(solution(1041));

////////////

// function solution(N) {
//const binary = N.toString(2);
//toString(2) -> 2진수로 바꿈

//const trimmed = binary.substr(0, binary.lastIndexOf('1') + 1);
//substr -> (추출하고자 하는 문자들의 시작위치, (옵셔널) 추출할 문자들의 총 숫자 )
//lastIndexOf -> (주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환)

//return Math.max(…(trimmed.split('1').map(item => item.length)));
//Math.max -> 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환
// }
