# 📝 목차

1. [✔️http란?](#✔️http란?)
2. [✔️get/post 차이](#✔️get/post-차이)
3. [✔️그외 메서드(put/patch/delete)](<#✔️그외-메서드(put/patch/delete)>)
4. [✔️메서드 간단 정리](#✔️메서드-간단-정리)
5. [✔️URL와 URI 차이점](#✔️URL와-URI-차이점)
6. [✔️http 에러에 대한 설명](#✔️http-에러에-대한-설명)

<br/>
<hr/>
<br/>

### ✔️http란?

- 웹상에서 클라이언트와 서버 간에 데이터를 주고받을 수 있는 프로토콜
- https는 http에서 보안을 더 강화한 것

### ✔️get/post 차이

<b>get</b><br/>
클라이언트가 서버로 데이터를 요청하기 위해 사용되는 Method
<br/>

<b>get 특징</b><br/>

- URL에 쿼리 스트링(데이터)을 붙여서 서버에 전송
- POST 방식보다 상대적으로 전송 속도가 빠름
- 전송하는 데이터양에 한계가 있음 (브라우저마다 GET 요청 길이 제한 존재)
  <br/>

<b>post</b><br/>
클라이언트가 서버로 데이터를 전송해 리소스를 추가하거나 생성하기 위해 사용되는 Method
<br/>

<b>post 특징</b><br/>

- 데이터들을 URL뒤에 붙여서 서버로 보내는 것이 아닌 Body에 담아서 전송
- 데이터들을 Body에 담기 때문에 서버로 보내는 데이터의 양은 제한 없음
- 클라이언트에서 인코딩, 서버에서 디코딩
- 요청받는 시간제한 존재
  <br/>
  <br/>

### ✔️그외 메서드(put/patch/delete)

<b>put</b><br/>
리소스가 있으면 대체하고 없으면 생성하는 메서드<br/>

<b>put 특징</b><br/>

- 동일한 PUT 요청을 여러 번 호출하면 항상 동일한 결과가 생성
- PUT 메서드는 리소스 전체를 대체
- 기존 리소스가 없을 경우 새로 생성(즉, 덮어쓰기를 수행한다고 볼 수 있다)
  <br/>

<b>patch</b><br/>
리소스를 부분 변경하는 메서드<br/>

<b>patch 특징</b><br/>

- 부분 변경이 필요한 상황에서 PATCH를 사용할 수 없다면 POST를 사용
  <br/>

<b>delete</b><br/>
요청 Resource를 삭제하는 메서드<br/>

### ✔️메서드 간단 정리

- GET: 리소스 조회
- POST: 요청 데이터 처리, 주로 등록에 사용
- PUT: 리소스를 대체, 해당 리소스가 없으면 생성
- PATCH: 리소스 일부 변경
- DELETE: 리소스 삭제
- HEAD: GET과 동일하지만 메시지 부분을 제외하고, 상태 줄과 헤더만 반환
- OPTIONS: 대상 리소스에 대한 통신 가능 옵션(메서드)을 설명(주로 CORS에서 사용)
- CONNECT: 대상 자원으로 식별되는 서버에 대한 터널을 설정
- TRACE: 대상 리소스에 대한 경로를 따라 메시지 루프백 테스트를 수행

### ✔️URL와 URI 차이점

- URL(Uniform Resource Locator)은 자원이 실제로 존재하는 위치를 가리킴
- URI(Uniform Resource Identifier)는 자원의 위치뿐만 아니라 자원에 대한 고유 식별자로서 URL을 의미를 포함

### ✔️http 에러에 대한 설명

<b> 400</b><br/>

- Bad Request (사용자의 잘못된 요청을 처리할 수 없음)<br/>

<b> 401</b><br/>

- Unauthorized (인증이 필요한 페이지를 요청한 경우)<br/>

<b> 404</b><br/>

- Not found (요청한 페이지 없음)

<b>500</b>

- Internal server error (내부 서버 오류)

<b>301</b>

- Moved permanently (요구한 데이터를 변경된 타 URL에 요청함 / Redirect된 경우)<br/>
  <br/>

---

<br/>

### 🔍 각주

<b>인코딩</b><br/>
인코딩 = 코드화 = 암호화 = 부호화<br/>
인코딩은 동영상이나 문자 인코딩 뿐 아니라 사람이 인지할 수 있는 형태의 데이터를 약속된 규칙에 의해 컴퓨터가 사용하는 0과 1로 변환하는 과정<br/>
<br/>
<b>디코딩</b><br/>
디코딩 = 역코드화 = 복호화<br/>
디코딩은 인코딩의 반대로서 사람이 이해 할 수 있도록 바꿔주는 것을 의미(바이트형식을 문자(문자열)로 변환)

---

### 🌐 참고 사이트

<a href="https://cocoon1787.tistory.com/526" target="_blank">[Network] GET방식과 POST방식의 차이</a>

<a href="https://velog.io/@woply/HTTP-%EC%A3%BC%EC%9A%94-%EB%A9%94%EC%84%9C%EB%93%9C-5%EA%B0%80%EC%A7%80-%EC%A0%95%EB%A6%ACGET-POST-PUT-PATCH-DELETE" target="_blank">[HTTP] 주요 메서드 5가지 정리(GET / POST / PUT / PATCH / DELETE)</a>

<a href="https://velog.io/@torang/URL%EA%B3%BC-URI%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90" target="_blank">URL과 URI의 차이점</a>

<a href="https://javaplant.tistory.com/18" target="_blank">HTTP 응답코드 메소드 정리 GET, POST, PUT, PATCH, DELETE, TRACE, OPTIONS</a>

<a href="https://200301.tistory.com/9" target="_blank">[인코딩 & 디코딩] 개념</a>

---
