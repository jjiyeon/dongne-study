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

삼각형의 특징 중 하나인 삼각형 세변의 길이 공식을 이용한 문제다.

> a,b,c의 길이중
> a+b > c,
> b+c > a,
> a+c > b
> 이 세가지 조건이 만족하면, 삼각형을 만들 수 있다.

1. 정렬을 한 뒤,
2. 조건을 비교해서 세가지 조건을 만족하면 1을 아니면 0을 리턴한다.
3. 작은 인덱스 2개의 합이 큰인덱스 값보다 크면 나머지 경우를 비교하지 않아도 3가지 조건 모두 성립한다.

0 ≤ P < Q < R < N 이 조건을 생각하면서 접근해야하는 문제라고 생각해서 한번에 풀지 못했던 문제인데, 삼각형 특징을 코드로 이해하고 있으면 비슷한 문제를 쉽게 생각할 수 있을것 같다.

## 4. NumberOfDiscIntersections
