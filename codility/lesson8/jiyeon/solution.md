# lesson8

## 1. Dominator

영어를 못해서 그런가 문제는 파악했는데 뭘 리턴해야 하는지 모르겠었던 문제였다. 그 뒤로 이해한 문제는 주어진 배열에서 과반수 이상을 차지한 숫자의 인덱스값을 아무거나 리턴하면 되는 문제였다.

1. 리듀스 함수를 사용해서 배열 내의 값을 세어서 객체로 받는다.
2. 1번에서 받은 값을 순회하면서 배열의 과반수를 차지한 숫자를 result에 담아서
3. result에 해당하는 값의 인덱스를 array 변수에 push
4. 마지막으로 array 변수의 값이 있으면 0번을, 아니면 -1을 리턴

코드가 약간 너저분한데, 간결하게 수정을 해야할것 같다.

> reduce 예제를 보면 생각보다 많은곳에 적용할 수 있을것 같다![https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#%EC%98%88%EC%A0%9C]


## 2. equilLeader

내가 이해한 문제는 A배열을 두개로 나눈 배열의 리더가 동일한 갯수 찾기.
1. 배열에서 중복인 리더 숫자
2. 배열을 반으로 쪼갰을때 절반값보다 더 많이 나오는 리더 숫자를 찾는것이다.

key와 value로 중복되는 숫자를 찾기 위해 map을 사용했다.
```
let max = 0; // 중복된 리더수를 담을 변수
let index = 0; // 리더의 인덱스
let count = 0; // 배열을 반으로 쪼개도 나오는 리더숫자의 갯수
```

이해한 내용을 설명하기가 어렵다. 잘 설명된 블로그를 첨부
> 참고 [https://hwan-shell.tistory.com/112]