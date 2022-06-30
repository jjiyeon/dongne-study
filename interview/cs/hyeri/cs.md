# 📝 목차

1. [✔️브라우저란?](#✔️브라우저란?)
2. [✔️브라우저 주소창에 google 치면 어떤일이 일어날까요?](#✔️브라우저-주소창에-google-치면-어떤일이-일어날까요?)
3. [✔️용어정리](#✔️용어정리)
4. [✔️stack, queue란?](#✔️stack,-queue란?)

<br/>
<hr/>
<br/>

### ✔️브라우저란?

- 웹 브라우저는 동기(Synchronous)적으로 (HTML + CSS), Javascript 언어를 해석하여 내용을 화면에 보여주는 응용 소프트웨어
- 웹 브라우저가 웹 서버에 필요한 자원(웹 페이지)을 요청하면 서버는 응답하고 웹 브라우저는 이를 해석한 후 사용자(Client)에게 보여줌
- 보통 자원은 HTML 문서지만 PDF, 이미지 등 다양한 형태일 수 있다.

<hr/>

### ✔️브라우저 주소창에 google 치면 어떤일이 일어날까요?

1. 브라우저 주소창에 maps.google.com을 입력한다.
2. 브라우저가 maps.google.com의 IP 주소를 찾기 위해 캐시에서 DNS 기록을 확인한다.
3. 만약 요청한 URL(maps.google.com)이 캐시에 없다면, ISP의 DNS 서버가 DNS 쿼리로 maps.google.com을 호스팅하는 서버의 IP 주소를 찾는다.
4. 브라우저가 해당 서버와 TCP 연결을 시작한다.
5. 브라우저가 웹서버에 HTTP 요청을 보낸다.
6. 서버가 요청을 처리하고 응답을 보낸다.
7. 서버가 HTTP 응답을 보낸다.
8. 브라우저가 HTML 컨텐츠를 보여준다. -> 렌더링을 수행하는 과정

렌더링 엔진의 기본적인 동작 원리

1. 브라우저는 서버로부터 HTML 문서를 모두 전달 받는다.
2. 렌더링 엔진은 전달받은 HTML 문서 파싱하여 DOM 트리를 구축한다.
3. 외부 CSS 파일과 함께 포함된 스타일 요소를 파싱한다.
4. DOM 트리와 ③의 결과물을 합쳐 렌더 트리를 구축한다.
5. 렌더 트리의 각 노드에 대해서 화면 상에서 어디에 배치할 지 결정한다.
6. UI백엔드에서 렌더 트리를 그리게 되고, 화면에 우리가 볼 수 있도록 출력된다.

<hr/>

### ✔️용어정리

- DNS (Domain Name System Servers)
  '도메인 이름 시스템 서버'는 URL들의 이름과 IP주소를 저장하고 있는 데이터베이스로, 웹사이트를 위한 주소록이라고 생각하면 된다. 숫자로 된 IP주소(ex. 63.245.217.105) 대신 사용자가 사용하기 편리하도록 주소를 매핑해주는 역할을 한다.

- TCP/IP (Transmission Control Protocol / Internet Protocol)
  '전송제어규약'과 '인터넷규약'은 데이터가 어떻게 웹을 건너 여행하는지 정의하는 통신 규약이다.
  이를 사용하겠다는 것은, IP주소 체계를 따르며 TCP의 특성을 활용해 송신자와 수신자의 논리적 연결을 생성하고 신뢰성을 유지할 수 있도록 하겠다는 의미이다. 즉 송신자가 수신자에게 IP주소를 사용해서 데이터를 전달하고 그 데이터가 제대로 갔는지에 대해 이야기하는 것이다.

- HTTP (Hypertext Transfer Protocol)
  클라이언트와 서버가 서로 통신할 수 있게 하기 위한 언어를 정의하는 어플리케이션 규약으로, 쉽게 말해 요청과 응답으로 이루어져있어 "어떤 데이터 주세요"라고 요청하면, "이 데이터 줄게요" 라고 응답하는 것이라고 할 수 있다.
  주로 HTML문서를 주고 받는데에 사용된다.

---

### ✔️stack, queue란?

<b>큐(Queue)?</b>

- 데이터를 집어넣을 수 있는 선형(linear) 자료형<br/>
- 먼저 집어넣은 데이터가 먼저 나옴 = FIFO(First In First Out)라고 한다.<br/>
- 순서대로 처리해야 하는 작업을 임시로 저장해두는 버퍼(buffer)로서 많이 사용<br/>

```
class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
```

<br/>

<b>스택 (Stack)</b>

- 나중에 집어넣은 데이터가 먼저 나옴 = LIFO(Last In First Out)
- 데이터를 집어넣는 push, 데이터를 추출하는 pop, 맨 나중에 집어넣은 데이터를 확인하는 peek 등의 작업을 할 수 있다.
- 서로 관계가 있는 여러 작업을 연달아 수행하면서 이전의 작업 내용을 저장해 둘 필요가 있을 때 널리 사용<br/>

```
class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
```

<br/>

<b>트리 (Tree)</b>

- 여러 데이터가 계층 구조 안에서 서로 연결된 형태를 나타낼 때 사용

<br/>

<b>스택은 어디에 쓰일까?</b>

- ctrl + z를 활용해서 되돌리거나 되돌리기를 취소할 때 스택을 통해 구현함

<br/>

### 🌐 참고 사이트

<a href="https://velog.io/@eassy/www.google.com%EC%9D%84-%EC%A3%BC%EC%86%8C%EC%B0%BD%EC%97%90%EC%84%9C-%EC%9E%85%EB%A0%A5%ED%95%98%EB%A9%B4-%EC%9D%BC%EC%96%B4%EB%82%98%EB%8A%94-%EC%9D%BC" target="_blank">'www.google.com'을 주소창에서 입력하면 일어나는 일</a>

<a href="https://velog.io/@khy226/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90-url%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%98%EB%A9%B4-%EC%96%B4%EB%96%A4%EC%9D%BC%EC%9D%B4-%EB%B2%8C%EC%96%B4%EC%A7%88%EA%B9%8C" target="_blank">브라우저에 url을 입력하면 어떤일이 벌어질까?</a>

<a href="https://all-young.tistory.com/22" target="_blank">브라우저와 렌더링 엔진 동작 원리</a>

<a href="https://helloworldjavascript.net/pages/282-data-structures.html" target="_blank">큐, 스택, 트리</a>

<a href="https://overcome-the-limits.tistory.com/14" target="_blank">[자료구조] 스택 with JavaScript</a>

---
