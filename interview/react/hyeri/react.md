# 📝 목차

1. [✔️클래스형 컴포넌트와 함수형 컴포넌트의 차이](#✔️클래스형-컴포넌트와-함수형-컴포넌트의-차이)
2. [✔️제어 컴포넌트와 비제어 컴포넌트의 차이](#✔️제어-컴포넌트와-비제어-컴포넌트의-차이)
3. [✔️생명주기 메서드](#✔️생명주기-메서드)

<br/>
<hr/>
<br/>

### ✔️클래스형 컴포넌트와 함수형 컴포넌트의 차이

<br/>

```
🔍 2019년 v16.8 부터는 함수형 컴포넌트에 리액트 훅(hook)을 지원해 함수형 컴포넌트와 훅을 함께 사용할 것을 권장
```

<b>선언방식</b>

```
//클래스형 컴포넌트
import React, { Component } from 'react'

class App extends Component{
    render(){
        return(
            HTML이 들어갈 자리
            );
        }
    }
```

<b>클래스형 컴포넌트</b>

- class 문법을 사용하여 클래스를 만든 후 Component로 부터 상속을 받아야 한다.
- render( ) 함수를 사용

```
//함수형 컴포넌트
function App() {
    return (
        // HTML이 들어갈 자리
    );
}
```

<b>기능적 차이</b>

- 클래스형 컴포넌트

  - state, lifeCycle 기능 사용 가능
  - 함수형 컴포넌트보다 메모리를 더 사용한다.
  - render() 함수를 사용해서 JSX를 반환
  - props를 조회할 때 this 키워드 사용

- 함수형 컴포넌트
  - state, lifeCycle 기능 사용 불가능( -> hook으로 해결)
  - 코드가 간결하여 클래스형 보다 사용하기 편함
  - JSX를 return문을 사용해서 반환

<br/>

### ✔️제어 컴포넌트와 비제어 컴포넌트의 차이

<br/>

<b>제어 컴포넌트(Controlled Components)</b>

```
🔍 HTML에서 <input>, <textarea>, <select>와 같은 폼 엘리먼트는 일반적으로 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트합니다. React에서는 변경할 수 있는 state가 일반적으로 컴포넌트의 state 속성에 유지되며 setState()에 의해 업데이트됩니다.
```

- React에 의해 값이 제어되는 입력 폼 엘리먼트가 “제어 컴포넌트 (controlled component)“

- 제어 컴포넌트로 사용하면, input의 값은 항상 React state에 의해 결정
- 코드를 조금 더 작성해야 한다는 의미이지만, 다른 UI 엘리먼트에 input의 값을 전달하거나 다른 이벤트 핸들러에서 값을 재설정할 수 있다.
- event 객체를 이용해 setState()로 값을 저장하는 방식을 제어 컴포넌트 방식

<br/>

```
export default function App() {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <input onChange={onChange} />
    </div>
  );
}
```

<br/>

<b>비제어 컴포넌트(Uncontrolled Components)</b>

```
대부분 경우에 폼을 구현하는데 제어 컴포넌트를 사용하는 것이 좋습니다. 제어 컴포넌트에서 폼 데이터는 React 컴포넌트에서 다루어집니다. 대안인 비제어 컴포넌트는 DOM 자체에서 폼 데이터가 다루어집니다.
```

- 모든 state 업데이트에 대한 이벤트 핸들러를 작성하는 대신 비제어 컴포넌트를 만들려면 ref를 사용하여 DOM에서 폼 값을 가져올 수 있다.
- 비제어 컴포넌트는 DOM에 신뢰 가능한 출처를 유지하므로 비제어 컴포넌트를 사용할 때 React와 non-React 코드를 통합하는 것이 쉬울 수 있다.
- 빠르고 간편하게 적은 코드를 작성할 수 있지만, 그 외에는 일반적으로 제어된 컴포넌트를 사용해야한다.
- ref로 가져오는 방식

<br/>

```
export default function App() {
  const inputRef = useRef(); // ref 사용
  const onClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div className="App">
      <input ref={inputRef} />
      <button type="submit" onClick={onClick}>
        전송
      </button>
    </div>
  );
}
```

<br/>

### ✔️생명주기 메서드

```
🔍 LifeCycle Method 는 한국어로 "생명주기 메서드" 라고 부릅니다. 생명주기 메서드는 컴포넌트가 브라우저상에 나타나고, 업데이트되고, 사라지게 될 때 호출되는 메서드들 입니다. 추가적으로 컴포넌트에서 에러가 났을 때 호출되는 메서드도 있습니다.
```

👉 생명주기 메서드 참고 사이트: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

👉 생명주기 메서드 설명 블로그: https://velog.io/@jetom/No.9-Life-cycle-%EC%A1%B0%EA%B1%B4%EB%B6%80-%EB%9E%9C%EB%8D%94%EB%A7%81

<br/>

<b>PureComponent</b>

```
🔍 React.Component는 shouldComponentUpdate()를 구현하지 않지만, React.PureComponent는 props와 state를 이용한 얕은 비교를 구현한다는 차이점만이 존재합니다.

React 컴포넌트의 render() 함수가 동일한 props와 state에 대하여 동일한 결과를 렌더링한다면, React.PureComponent를 사용하여 경우에 따라 성능 향상을 누릴 수 있습니다.
```

<b>shouldComponentUpdate</b>

- shouldComponentUpdate 메서드는 컴포넌트가 리렌더링 할지 말지를 결정하는 메서드
- 최적화 할 때 사용하는 메서드 React.memo 역할과 비슷하다

<br/>

### ✔️리액트 렌더링 성능 향상

```
🔍 내부적으로 React는 UI를 최신화하기 위해 비용이 많이 드는 DOM 작업의 수를 최소화하기 위해 몇 가지 기발한 방법을 활용합니다. 많은 애플리케이션에서 React를 사용하면 성능을 특별히 최적화하기 위해 많은 작업을 수행하지 않고도 빠른 사용자 인터페이스로 이어질 수 있습니다. 그럼에도 불구하고 React 애플리케이션의 속도를 높일 수 있는 몇 가지 방법이 있습니다.
```

<br/>

### 🌐 참고 사이트

<a href="https://ludeno-studying.tistory.com/87" target="_blank">React 함수형 컴포넌트, 클래스형 컴포넌트 차이점</a>

<a href="https://ko.reactjs.org/docs/uncontrolled-components.html" target="_blank">비제어 컴포넌트</a>

<a href="https://ko.reactjs.org/docs/forms.html#controlled-components" target="_blank">제어 컴포넌트 (Controlled Component)</a>

<a href="https://velog.io/@yukyung/React-%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%B9%84%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%ED%86%BA%EC%95%84%EB%B3%B4%EA%B8%B0" target="_blank">React: 제어 컴포넌트와 비제어 컴포넌트의 차이점</a>

<a href="https://react.vlpt.us/basic/25-lifecycle.html" target="_blank">LifeCycle Method</a>

<a href="https://ko.reactjs.org/docs/react-api.html#reactpurecomponent" target="_blank">React.PureComponentd</a>

---
