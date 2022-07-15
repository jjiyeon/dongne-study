```
function solution(A, B) {
    const N = A.length;
    const alive = [];

    alive.push(0);
    let i = 1;
    while(i < N){
        if(B[i] == 0 && B[alive[alive.length-1]] == 1){
            if(A[i] > A[alive[alive.length-1]]){
                alive.pop();
            }
            else{
                i++;
            }
        }
        else{
            alive.push(i);
            i++;
        }
    }

    return alive.length;
}
```

문제는 이해가 가는데 어떻게 짜야할지 몰라서 답을 봤당.. 😢 <br/>
생각보다 쉬운 코드에 허탈.... 😞

👉 참고 블로그: https://miiingo.tistory.com/329
