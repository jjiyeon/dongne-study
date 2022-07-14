ㅠㅜㅠㅜㅠㅜㅠㅜ 조금 더 고민하는거로....하하하...

```
function solution(S) {
    if(S.length === 0) return 1;

    let arr = [];

    for(let i in S) {
        let c = S[i]
        if(c === '{' || c === '[' ||c ==='(') {
            arr.push(c);
        } else {
            if(arr.length === 0) return 0; //여는 괄호 없이 바로 닫는 괄호가 나온 경우

            if(c === '}' && arr.pop() !== '{') return 0;
            if(c === ']' && arr.pop() !== '[') return 0;
            if(c === ')' && arr.pop() !== '(') return 0;
        }
    }

    if(arr.length !== 0) return 0 //닫는 괄호가 모자란 경우

    return 1;
}
```

👉 참고 블로그: https://sustainable-dev.tistory.com/17

["{","}","[","]","(",")"]

이런식으로 배열or객체를 만들어서 {랑 }가 있을때 풀수는 없을까 고민했던 문제..

```
function solution(S) {
    var brackets = {
        "{": "}",
        "(": ")",
        "[": "]"
    }

    var closedBrackets = ["}", ")", "]"]

    var stack = [];

    for (var i =0; i < S.length; i++) {
        if (brackets.hasOwnProperty(S[i])) {
            stack.push(S[i])
        } else if (brackets[stack[stack.length -1]] == S[i]) {
            stack.pop()
        } else if (closedBrackets.indexOf(S[i]) !== -1) {
        	return 0
        }
    }

    return stack.length === 0 ? 1 : 0
}
```

👆 이런식으로 풀 수 있다고 하는데, 이해는 안가서 천천히 살펴보면서 확인해야할것 같습니다 !

👉 참고 블로그: https://github.com/yaseenshaik/codility-solutions-javascript/blob/master/Brackets.md
