# lesson6

## 1. distinct

너무너무너무 쉬웠던 문제다. 중복을 제거해서 사이즈만 리턴해주면 되는 문제.

## 2. maxProductOfThree

33% 문제 접근 방식

1. 음수를 제거하고, 내림차순 정렬을 한 뒤
2. 3개의 항을 곱해서 리턴
3. The following issues have been detected: wrong answers, runtime errors.
   For example, for the input [-10, -2, -4] the solution terminated unexpectedly.

3번에 대한 예외를 위해, 음수곱에 대한 조건식을 추가. 작은 음수 두개와 큰 양수 하나로도 큰 합을 만들어낼 수 있다고 한다. 그렇게 해서 예외를 잡아주면 된다.

참고 [https://yceffort.kr/2020/06/codility-06-02-max-product-of-three]

## 3. triangle
