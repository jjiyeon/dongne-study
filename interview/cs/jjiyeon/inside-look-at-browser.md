# 네비게이션 과정에서 일어나는 일

> 네비게이션을 사이트간 이동으로 이해하면 쉽다.
> 이 글은 최신브라우저의 내부 살펴보기[https://d2.naver.com/helloworld/5237120]글을 이해해보려고 요약해본 글입니다.

## 간단한 네비게이션

1. 입력처리

입력되는 내용이 검색어인지, url인지 확인한다. 구글은 주소표시줄이 검색창이기도 하다.
UI 스레드는 입력되는 내용을 파싱하여 검색엔진으로 이동할지, 요청한 사이트로 이동할지 결정해야 한다.

2. 네비게이션 시작

사이트의 컨텐츠를 가져오기 위해 UI 스레드가 네트워크 호출을 시작한다. 로딩 스피너가 탭의 모서리에 표시되고, 네트워크 스레드는 요청에 대한 DNS Lookup 및 TLS 연결 설정과 같은 적절한 프로토콜을 거쳐 요청을 처리한다.

3. 응답읽기

응답 본문인 페이로드가 들어오기 시작하면 네트워크 스레드는 필요에 따라 스트림의 처음 몇 바이트를 확인한다. 페이로드가 어떤 형식의 데이터인지는 응답 헤더의 Content-Type 헤더가 알려 주지만 정보가 없거나 잘못된 정보가 있을 수 있다. 그래서 이때 MIME 스니핑을 실행해 데이터의 실제 형식을 알아낸다.
응답이 HTML 파일이라면 데이터를 렌더러 프로세스에 전달하는 단계로 넘어간다. 하지만 응답이 ZIP 형식 파일이나 다른 형식의 파일이라면 다운로드 요청이므로 다운로드 매니저에 데이터를 전달하는 단계로 넘어가야 한다.
이 단계는 또한 Safe Browsing의 검사가 실행되는 단계이다. 도메인과 응답 데이터가 악성 사이트로 알려진 사이트와 일치하는 것 같다면 네트워크 스레드는 경고 페이지를 표시하라고 알린다.

3. 렌더러 프로세스 찾기

모든 검사가 끝나고 브라우저가 요청된 사이트로 이동해야 한다고 네트워크 스레드가 확신하게 되면 네트워크 스레드는 UI 스레드에 데이터가 준비되었음을 알린다. 그러면 UI 스레드는 웹 페이지의 렌더링을 수행할 렌더러 프로세스를 찾는다.
2단계에서 UI 스레드가 네트워크 스레드로 URL 요청을 보낼 때 UI 스레드는 이미 어느 사이트로 이동할지 알고 있다. UI 스레드는 렌더러 프로세스를 먼저 찾거나 네트워크 요청과 동시에 렌더러 프로세스를 시작한다. 이런 방식에서는 모든 것이 예상대로 잘 진행된다면 네트워크 스레드가 데이터를 받을 때 이미 렌더러 프로세스는 준비 상태에 있게 된다. 만약 다른 사이트로 리디렉션이 이루어져 다른 프로세스가 필요하게 되면 미리 준비한 프로세스가 사용되지 않을 수도 있다.

4. 네비게이션 실행

이제 데이터와 렌더러 프로세스가 준비되었으므로 내비게이션을 실행하도록 브라우저 프로세스에서 렌더러 프로세스로 IPC 메시지를 전송한다. 또한 렌더러 프로세스가 HTML 데이터를 계속 수신할 수 있도록 브라우저 프로세스는 데이터 스트림을 전달한다. 렌더러 프로세스에서 내비게이션이 실행되었다는 것을 브라우저 프로세스가 확인하고 나면 내비게이션이 완료되고 문서 로딩 단계가 시작된다.
이 시점에 주소 표시줄이 업데이트되고 보안 표시와 사이트 설정 UI도 새 페이지의 사이트 정보를 반영해 갱신된다.

4. 추가단계: 초기 로드 완료
   내비게이션이 실행되면 렌더러 프로세스는 계속 리소스를 로딩하고 페이지를 렌더링한다.렌더러 프로세스가 렌더링을 '끝내면' 브라우저 프로세스로 IPC 메시지를 보낸다(이 시점은 페이지의 모든 프레임에서 onload 이벤트의 실행까지 끝낸 이후이다). 그러면 UI 스레드는 탭에서 로딩 스피너의 작동을 중지한다.

## 렌더러 프로세스 내부 동작

렌더러 프로세스는 탭 내부에서 발생하는 모든 작업을 담당한다. 렌더러 프로세스의 주요 역할은 HTML과 CSS, JavaScript를 사용자와 상호작용을 할 수 있는 웹 페이지로 변환하는 것이다.

### 파싱

1. Dom 구축

페이지를 이동하는 내비게이션 실행 메시지를 렌더러 프로세스가 받고 HTML 데이터를 수신하기 시작하면 렌더러 프로세스의 메인 스레드는 문자열(HTML)을 파싱해서 DOM(document object model)으로 변환하기 시작한다.

2. 하위 리소스 로딩

웹 사이트는 일반적으로 이미지, CSS, JavaScript와 같은 외부 리소스를 사용한다. 이러한 파일은 네트워크나 캐시에서 로딩해야 한다. DOM을 구축하기 위해 파싱하는 동안 이런 리소스를 만날 때마다 메인 스레드가 하나하나 요청할 수도 있을 것이다. 하지만 속도를 높이기 위해 '프리로드(Preload) 스캐너'가 동시에 실행된다. HTML 문서에 <img> 또는 <link> 와 같은 태그가 있으면 프리로드 스캐너는 HTML 파서가 생성한 토큰을 확인하고 브라우저 프로세스의 네트워크 스레드에 요청을 보낸다.

3. 스타일 계산

DOM만으로는 웹 페이지의 모양을 알 수 없다. CSS로 웹 페이지 요소의 모양을 결정할 수 있기 때문이다. 메인 스레드는 CSS를 파싱하고 각 DOM 노드에 해당되는 계산된 스타일(computed style)을 확정한다. 계산된 스타일은 CSS 선택자(selector)로 구분되는 요소에 적용될 스타일에 관한 정보이다.

4. 레이아웃

이제 렌더러 프로세스가 문서의 구조와 각 노드의 스타일을 알지만 페이지를 렌더링하기에는 충분하지 않다.레이아웃은 요소의 기하학적 속성(geometry)를 찾는 과정이다. 메인 스레드는 DOM과 계산된 스타일을 훑어가며 레이아웃 트리를 만든다. 레이아웃 트리는 x, y 좌표, 박스 영역(bounding box)의 크기와 같은 정보를 가지고 있다. 레이아웃 트리는 DOM 트리와 비슷한 구조일 수 있지만 웹 페이지에 보이는 요소에 관련된 정보만 가지고 있다. display: none 속성이 적용된 요소는 레이아웃 트리에 포함되지 않는다(그러나 visibility: hidden 속성이 적용된 요소는 레이아웃 트리에 포함된다). 이와 비슷하게 p::before{content:"Hi!} 속성과 같은 의사 클래스(pseudo class)의 콘텐츠는 DOM에는 포함되지 않지만 레이아웃 트리에는 포함된다.

5. 페인트

DOM, 스타일, 레이아웃을 가지고도 여전히 페이지를 렌더링할 수 없다. 예를 들어 어떤 요소에 z-index 속성이 적용되었다면 HTML에 작성된 순서로 요소를 그리면 잘못 렌더링된 화면이 나온다.페인트 단계에서 메인 스레드는 페인트 기록(paint record)을 생성하기 위해 레이아웃 트리를 순회한다. 페인트 기록은 '배경 먼저, 다음은 텍스트, 그리고 직사각형'과 같이 페인팅 과정을 기록한 것이다. JavaScript로 canvas 요소에 그림을 그려 봤다면 이 과정이 익숙할 것이다.

### 합성

브라우저는 문서의 구조와 각 요소의 스타일, 요소의 기하학적 속성, 페인트 순서를 알고 있다. 브라우저는 이제 웹 페이지를 어떻게 그릴까? 이 정보를 화면의 픽셀로 변환하는 작업을 래스터화(rasterizing)라고 한다.
합성은 웹 페이지의 각 부분을 레이어로 분리해 별도로 래스터화하고 컴포지터 스레드(compositor thread)라고 하는 별도의 스레드에서 웹 페이지로 합성하는 기술이다. 스크롤되었을 때 레이어는 이미 래스터화되어 있으므로 새 프레임을 합성하기만 하면 된다. 애니메이션 역시 레이어를 움직이고 합성하는 방식으로 만들 수 있다.
