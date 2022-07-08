길이가 N인 정수 배열 A와 0<=P<Q<N인 (P,Q)가 주어지면 A[P] + ... + A[Q]의 산술평균을 구할 수 있다. A에서 가장 작은 평균을 갖는 범위의 시작 위치(P)를 찾아라.

👉 참고 블로그 https://nukeguys.tistory.com/175 <br/>
https://sustainable-dev.tistory.com/11

- 어떤 수 n, m이 있고, n <= m 일 경우, 두 수의 평균은 n보다 항상 크거나 같다.
- 마찬가지로, 원소 n, m, o, p 가 있고 (n + m) <= (o + p)일 경우 네 수의 평균은 (n + m)보다 크다.
- 원소가 4개 이상인 경우는 생각하지 않고 2개, 3개인 경우로 나눠서 생각하면된다!

```
function solution(A) {
    let min; //최소 Avg
    let minP; //최소 P
    let tmp; //임시 변수

    for(i = 0; i < A.length-1; i++) {
        //원소 2개
        if(i < A.length-1){
            if(i === 0) { //첫번째 최소값 셋팅
                min = (A[i] + A[i+1]) / 2;
                minP = i;
            } else {
                tmp = (A[i] + A[i+1]) / 2;

                if(tmp < min) {
                    min = tmp;
                    minP = i;
                } else if ( tmp === min ) { //최소 평균값과 같을 경우
                    if(i < minP) minP = i;
                }
            }
        }

        //원소 3개
        if(i < A.length-2){
            tmp = (A[i] + A[i+1] + A[i+2]) / 3;

            if(tmp < min) {
                min = tmp;
                minP = i;
            } else if (tmp === min) { //최소 평균값과 같을 경우
                if(i < minP) minP = i;
            }
        }
    }

    return minP;

}
```
