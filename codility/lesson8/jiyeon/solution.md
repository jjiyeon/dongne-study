# lesson8

## 1. Dominator

영어를 못해서 그런가 문제는 파악했는데 뭘 리턴해야 하는지 모르겠었던 문제였다. 그 뒤로 이해한 문제는 주어진 배열에서 과반수 이상을 차지한 숫자의 인덱스값을 아무거나 리턴하면 되는 문제였다.

1. 리듀스 함수를 사용해서 배열 내의 값을 세어서 객체로 받는다.
2. 1번에서 받은 값을 순회하면서 배열의 과반수를 차지한 숫자를 result에 담아서
3. result에 해당하는 값의 인덱스를 array 변수에 push
4. 마지막으로 array 변수의 값이 있으면 0번을, 아니면 -1을 리턴

코드가 약간 너저분한데, 간결하게 수정을 해야할것 같다.

> reduce 예제를 보면 생각보다 많은곳에 적용할 수 있을것 같다![https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#%EC%98%88%EC%A0%9C]
