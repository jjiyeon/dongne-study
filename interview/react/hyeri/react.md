# 📝 목차

1. [✔️클래스형 컴포넌트와 함수형 컴포넌트의 차이](#✔️클래스형-컴포넌트와-함수형-컴포넌트의-차이)
2. [✔️제어 컴포넌트와 비제어 컴포넌트의 차이](#✔️제어-컴포넌트와-비제어-컴포넌트의-차이)
3. [✔️생명주기 메서드](#✔️생명주기-메서드)
4. [✔️리액트 렌더링 성능 향상](#✔️리액트-렌더링-성능-향상)
5. [✔️useMemo와 useCallback의 차이](#✔️useMemo와-useCallback의-차이)
6. [✔️state변경 시 useState를 사용하는 이유](#✔️state변경-시-useState를-사용하는-이유)
7. [✔️useLayoutEffect와 useEffect의 차이](#✔️useLayoutEffect와-useEffect의-차이)

###

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

<b>useMemo</b>

```
useMemo(()=> func, [input_dependency])

func은 캐시하고 싶은 함수
input_dependency는 useMemo가 캐시할 func에 대한 입력의 배열로서 해당 값들이 변경되면 func이 호출

const average = useMemo(() => {
    console.log("calculate average. It takes long time !!");
    return users.reduce((acc, cur) => {
        return acc + cur.score / users.length;
    }, 0);
}, [users]);
```

- React에서 CPU 소모가 심한 함수들을 캐싱하기 위해 사용하는 메서드
- 종속 변수들이 변하지 않으면 함수를 굳이 다시 호출하지 않고 이전에 반환한 참조값을 재사용함

<b>React.memo 컴포넌트 메모이제이션</b>

- React.memo는 Hook이 아니기 때문에 클래스형 컴포넌트에서도 사용할 수 있다
- 컴포넌트의 props가 바뀌지 않았다면, 리렌더링하지 않도록 설정하여 함수형 컴포넌트의 리렌더링 성능을 최적화 해줌

```
import React,{ memo } from "react";

function Item({ user }) {
  console.log("Item component render");

  return (
    <div className="item">
      <div>이름: {user.name}</div>
      <div>나이: {user.age}</div>
      <div>점수: {user.score}</div>
      <div>등급: {result.grade}</div>
    </div>
  );
}

export default memo(Item);

//새로 추가된 Item만 새로 렌더되고 이미 렌더된 Item들은 리렌더링 되지 않는다.
```

<b>useCallback</b>

- useMemo와 비슷한 useCallback은 함수 선언을 memoize 하는데 사용
- 종속 변수들이 변하지 않는 이상 함수를 재생성하지 않고 이전에 있던 참조 변수를 그대로 하위 컴포넌트에 props로 전달 (= 리렌더링 방지)

<b>컴포넌트를 매핑할 때에는 key값으로 index를 사용하지 않는다</b>

1. 어떤 배열에 중간에 어떤 요소가 삽입될때 그 중간 이후에 위치한 요소들은 전부 index가 변경
2. key값이 변경되어 React는 key가 동일 할 경우, 동일한 DOM Element를 보여주기 때문에 예상치 못한 문제가 발생
3. 데이터가 key와 매치가 안되어 서로 꼬이는 부작용도 발생

<br/>

### ✔️useMemo와 useCallback의 차이

> memoization?<br/>
> 기존에 수행한 연산의 결과값을 어딘가에 저장해두고 동일한 입력이 들어오면 재활용하는 프로그래밍 기법

<b>useMemo</b>

- useMemo는 이전 값을 기억해두었다가 조건에 따라 재활용하여 성능을 최적화 하는 용도로 사용된다. (= memoization된 값을 반환)

<b>useCallback</b>

- 리액트의 렌더링 성능을 위해서 제공되는 Hook
- memoization된 새로운 함수를 반환

<br/>

### ✔️props와 state의 차이

👉 참고 블로그: https://velog.io/@jetom/3.4-state

<br/>

### ✔️state변경 시 useState를 사용하는 이유

<br/>

- state는 immutable(불변성)을 유지해야함
- state와 setState를 비교해서 업데이트가 필요한 경우에만 render 함수를 호출
- 상태 변경을 추적하고 변경에 따라 구성요소를 다시 렌더링하려면 setState를 사용

<br/>

### ✔️useLayoutEffect와 useEffect의 차이

<br/>

<b>useEffect</b>

- 컴포넌트 렌더링 → 화면 업데이트 → useEffect실행
- 비동기적으로 실행됨
- DOM과 인터렉션이 없는 경우 사용(대부분 경우)

<b>useLayoutEffect</b>

- 컴포넌트 렌더링 → useLayoutEffect 실행 → 화면 업데이트
- 동기적으로 실행됨
- 렌더링 직후 DOM요소의 값을 읽을 때 유용함(scroll position등)
- DOM을 mutate할 경우에 사용

DOM을 변경해야 하는 경우나 계산된 state 값을 화면에 표출해야 하는 경우에는 useLayoutEffect를 사용하는 것이 좋다.

데이터 fetch 함수 실행 혹은 이벤트 핸들러, state를 다루는 작업 등 모든 경우에는 useEffect를 사용

```
🔍 useEffect를 사용할 경우 effect가 실행됨과 동시에 DOM에 mutation이 일어날 경우 flickering이 발생할 수 있다. 이러한 경우 useLayoutEffect를 사용해서 flickering을 막을 수 있다.

결국 두 hook의 가장 큰 차이점은 실행 시점이다.

flickering: 화면이 깜빡거리는 현상
```

<br/>

### 🌐 참고 사이트

<br/>
<a href="https://ludeno-studying.tistory.com/87" target="_blank">React 함수형 컴포넌트, 클래스형 컴포넌트 차이점</a>

<a href="https://ko.reactjs.org/docs/uncontrolled-components.html" target="_blank">비제어 컴포넌트</a>

<a href="https://ko.reactjs.org/docs/forms.html#controlled-components" target="_blank">제어 컴포넌트 (Controlled Component)</a>

<a href="https://velog.io/@yukyung/React-%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%B9%84%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%ED%86%BA%EC%95%84%EB%B3%B4%EA%B8%B0" target="_blank">React: 제어 컴포넌트와 비제어 컴포넌트의 차이점</a>

<a href="https://react.vlpt.us/basic/25-lifecycle.html" target="_blank">LifeCycle Method</a>

<a href="https://ko.reactjs.org/docs/react-api.html#reactpurecomponent" target="_blank">React.PureComponentd</a>

<a href="https://velog.io/@shin6403/React-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EB%8A%94-7%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95-Hooks-%EA%B8%B0%EC%A4%80" target="_blank">React 렌더링 성능 최적화하는 7가지 방법 (Hooks 기준)</a>

<a href="https://mari-mo.tistory.com/214" target="_blank">state를 직접 변경하지 않고 setState를 사용하는 이유에 대해서 설명하세요.
</a>

<a href="https://velog.io/@suyeonme/react-useLayout%EA%B3%BC-useEffect%EC%9D%98-%EC%B0%A8%EC%9D%B4" target="_blank">[react] useLayoutEffect과 useEffect의 차이
</a>

<a href="https://guiyomi.tistory.com/120" target="_blank">React.js - useEffect vs useLayoutEffect 차이점 알아보기
</a>

---
