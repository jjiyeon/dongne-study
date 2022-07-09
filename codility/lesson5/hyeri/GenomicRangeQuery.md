주어진 배열에서 최소 뉴클레오타이드 값이 무엇인지 리턴하는 문제입니다.<br/>
DNA는 뉴클레오타이드 A, C, G, T의 배열로 만들 수 있는데 각 뉴클레오타이드의 영향도가 1, 2, 3, 4 라고 합니다.
<br/>
<br/>
예를 들어 S = CAGCCTA 라고 한다면 전체 배열 중 최소 뉴클레오타이드의 영향도는 A가 있으므로 1이 됩니다.<br/>
<br/>
여기서 문제는 부분 배열에서의 최소 뉴클레오타이드의 영향도를 찾는 것이고, 문제에서는 세 가지 예를 보이고 있습니다.<br/>
<br/>
P = [2, 5, 0]<br/>
Q = [4, 5, 6]<br/>
<br/>
여기서 S[2:4] = GCC 이고 C의 영향도가 2이므로 2가 되고,<br/>
S[5:5] = T 이고 T의 영향도는 4이므로 4가 되고,<br/>
S[0:6] = CAGCCTA 이고 A의 영향도가 1이므로 1이 됩니다.<br/>
그래서 리턴은 [2, 4, 1]을 리턴하면 됩니다.<br/>
<br/>

---

<br/>

```
function solution(S, P, Q) {
  let resultArr = [];

  for (let i = 0; i < P.length; i++) {
    let temp = S.slice(P[i], Q[i] + 1);

    if (temp.indexOf("A") !== -1) {
      resultArr.push(1);
    } else if (temp.indexOf("C") !== -1) {
      resultArr.push(2);
    } else if (temp.indexOf("G") !== -1) {
      resultArr.push(3);
    } else {
      resultArr.push(4);
    }
  }

  return resultArr;
}

```

👉 참고 블로그 https://slee2540.tistory.com/64
