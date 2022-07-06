# Http(Hypertext Transfer Protocol) 프로토콜

인터넷에서 데이터를 주고받기 위한 통신규약

- 상태가 없는(stateless) 프로토콜; 각각의 데이터 요청이 독립적이다.
- request 요청과 response 응답으로 주고 받는다.

## request url, uri?

우리는 http(프로토콜)//host/resource path/ 로 이루어진 요청주소를 url 이라고 부른다.
URL은 Uniform Resource Locator의 약자인데 자원의 위치, 네트워크 상에서 자원이 어디 있는지를 알려주기 위한 규약이다. 즉, 컴퓨터 네트워크와 검색 메커니즘에서의 위치를 지정하는, 웹 리소스에 대한 참조이다.
URI는 Uniform Resource Identifier의 약어로 통합자원 식별자, 인터넷에 있는 자원을 나타내는 유일한 주소이다.

예를 들어, http://endic.naver.com/endic.nhn?docid=1232950 의 주소에서 , ?docid=1232950라는 식별자로 인해 URL을 포함하는 URI 주소라고 보면 될것 같다. 앞의 http://endic.naver.com/endic.nhn 까지가 URL로 자원의 위치를 말하고, 유일한 식별자가 붙음으로 URI 주소로 볼 수 있다는것. 자원을 나타내는 유일한 주소가 URL을 포함하는 URI라고 이해한다.

## Http 요청 메서드

요청하는 데이터에 특정 동작을 수행할때, 메서드를 이용한다.

- GET : 자원을 요청
- POST : 새로운 자원을 생성
- PUT : 존재하는 자원을 수정
- DELETE : 존재하는 자원을 삭제
- HEAD: 서버 헤더정보 획득,response body를 반환하지 않는다
- OPTIONS: 서버 옵션을 확인하기 위한 요청 - 서버에서 어떤 메서드를 지원하는지

## Http 상태코드

클라이언트에서 보낸 요청에 대한 응답 정보

- 200 번대 : 성공 또는 대부분의 성공
- 300 번대 : 이전 주소로 요청했을 시, 새 url로 리디렉션을 유도하는 경우
- 400 번대 : 클라이언트 에러

  - 400 : Bad Request, 잘못된 요청
  - 401 : Unauthorized, 권한 없이 요청. Authorization 헤더가 잘못된 경우
  - 403 : Forbidden, 서버에서 해당 자원에 대해 접근 금지
  - 405 : Method Not Allowed, 허용되지 않은 요청 메서드
  - 409 : Conflict, 최신 자원이 아닌데 업데이트하는 경우. ex) 파일 업로드 시 버전 충돌

- 500 번대 : 서버쪽 에러
  - 501 : Not Implemented, 요청한 동작에 대해 서버가 수행할 수 없는 경우
  - 503 : Service Unavailable, 서버가 과부하 또는 유지 보수로 내려간 경우
