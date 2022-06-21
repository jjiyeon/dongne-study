숫자 배열에 [1 ... 배열개수 +1] 범위 숫자가 임의적으로 들어가있다.
임의적으로 들어가있는 숫자중에 놓친 값이 있는지 찾아라.

첫 번째 코드(50%)

1. A가 뒤죽박죽이라 우선 sort로 정렬해줌
2. for문으로 A.length만큼 반복한다.
3. 이때 조건은 i와 A[i]가 같지 않으면 i를 return하게 했다.
   - 😂 i가 0부터 시작해서 숫자가 같지 않아 +1을 해주게 됐다.

👉 empty_and_single, missing_first_or_last, single, double, large_range에서 RUNTIME ERROR가 났습니다..<br/>
👉 기존 코드에서 if (A.length === 0 || A.length === []) { return 1;}를 추가해줘도 50%였습니다..

🤔 왜 나는건지 이해가 안되네용.. 감도 못 잡고있는 상태입니다.

두 번째 코드(100%)

👉 A.length가 0일때를 생각하지 않았습니다.
👉 [1,2,]일때 3을 return 시켜줘야 하는데, 하지 않아서 생긴 문제였습니다.

🌐 참고 블로그
https://slee2540.tistory.com/54
