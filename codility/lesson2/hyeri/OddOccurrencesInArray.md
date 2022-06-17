첫 번째 코드(66%)

1. setNumber라는 변수에 set 객체를 선언
   - (값 중복을 판별하기 위해서 set을 사용함)
2. 최종적으로 값이 담길 result라는 변수에 빈 배열을 선언
3. for문으로 A의 length만큼 반복한다.
4. 이때 조건은 중복이 되지 않는 숫자만 add 메서드를 사용
   - (else는 중복 되는 숫자임으로 delete해주기)
5. result에 setNumber를 deep copy한다.
6. 결과값 result를 return 시킨다.

🤔 medium2, big1, big2를 통과 하지 못했습니다 ㅠㅜㅠㅜ
객체 반복문인 for in을 써야할까 고민중입니당..

<hr/>

두 번째 코드(100%)

👉 참고 블로그 https://slee2540.tistory.com/52

👉 제 코드와 다른점

1. for in문
2. set 객체 메서드를 let으로 선언
3. result를 맨 마지막에 선언 후 set을 deep copy함
4. result[0]으로 return해줬습니다.

🤔 result[0]으로 return을 안해줘도 될거같은데...? 왜 해줬을까요?
반복문의 종류를 알고 알고리즘을 짜야할것같습니다...
