### ✔️GraphQL?

- GraphQL은 애플리케이션 프로그래밍 인터페이스(API)를 위한 쿼리 언어
- 서버측 런타임으로 클라이언트에게 요청한 만큼의 데이터를 제공하는 데 우선 순위를 둠
- 개발자가 단일 API 호출로 다양한 데이터 소스에서 데이터를 끌어오는 요청을 구성할 수 있도록 지원

<br/>

### ✔️rest API와 다른점

- REST API는 URL, METHOD등을 조합하기 때문에 다양한 Endpoint가 존재
  - graphQL은 단 하나의 Endpoint가 존재(여러번 네트워크 호출 필요 없이, 단 한번의 네트워크 호출로 처리가 가능)
- REST API에서는 각 Endpoint마다 데이터베이스 SQL 쿼리가 달라짐
  - graphQL API에서는 불러오는 데이터의 종류를 쿼리 조합을 통해서 결정

<br/>

### ✔️graphQL 장단점

<b>장점</b>

1. HTTP 요청의 횟수를 줄일 수 있다
   - GraphQL 은 원하는 정보를 하나의 Query 에 모두 담아 요청하는 것이 가능
2. HTTP 응답의 Size 를 줄일 수 있다
   - GraphQL 은 원하는 대로 정보를 요청하는 것이 가능

<b>단점</b>

1. File 전송 등 Text 만으로 하기 힘든 내용들을 처리하기 복잡
2. 고정된 요청과 응답만 필요할 경우에는 Query 로 인해 요청의 크기가 RESTful API 의 경우보다 더 커진다

<br/>

---

<br/>

### 🌐 참고 사이트

<a href="https://www.redhat.com/ko/topics/api/what-is-graphql" target="_blank">GraphQL이란?</a>

<a href="https://velog.io/@swhan9404/graphQL-%EC%9D%B4%EB%9E%80" target="_blank">GraphQL이란?</a>
