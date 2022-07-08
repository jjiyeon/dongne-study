# RestAPI

REST(Representational State Transfer)는 HTTP/1.0과 1.1의 스펙 작성에 참여하였고 아파치 HTTP 서버 프로젝트의 공동설립자인 로이 필딩 (Roy Fielding)의 2000년 논문에서 처음 소개되었다. 웹의 장점을 최대한 활용할 수 있는 아키텍쳐로서 REST를 소개하였고 이는 HTTP 프로토콜을 의도에 맞게 디자인하도록 유도하고 있다. REST의 기본 원칙을 성실히 지킨 서비스 디자인을 “RESTful”이라고 표현한다.

## 1. RestAPI의 중심 규칙

1. URI는 정보의 자원을 표현해야 한다. 동사보다 명사를 사용하고, 자원을 표현하는데 중점을 둬야한다.
2. 자원에 대한 행위는 HTTP method로 표현한다.
   - GET(조회)
   - POST(생성)
   - PUT(전체 교체)
   - PATCH(일부 수정)
   - DELETE(삭제)

### 2. 구성

REST API는 자원(Resource), 자원에 대한 행위(Verb), 자원에 대한 행위의 내용(Representations)의 3가지 요소로 구성된다.

> 참고[https://poiemaweb.com/js-rest-api]
