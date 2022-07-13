# React Life Cycle

> React의 Life Cycle을 그림으로 확인할 수 있는 페이지 참고[https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]

컴포넌트의 수명은 보통 페이지에서 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝이난다.

- 생성될 때(마운트)
- 업데이트 할 때
  - props가 바뀔 때
  - state가 바뀔 때
  - 부모 컴포넌트가 리렌더링 될 때
  - this.forceUpdate로 강제로 렌더링을 트리거할 때
- 제거될 때(언마운트)

## 메서드 살펴보기

1. constructor 생성자
   - 초기 state를 정할 수 있다. class형에서 생성자를 사용하여 초기값을 설정한다. hook을 사용하면 useState(0)를 사용해서 초기값을 설정한다.
2. getDerivedStateFromProps
   - 최초 마운트 시와 갱신 시 모두에서 render 메서드를 호출하기 직전에 호출된다. state를 갱신하기 위한 객체를 반환하거나, null을 반환하여 아무 것도 갱신하지 않을 수 있다. 렌더링 될 때마다 호출되기 때문에 드물게 사용하는것을 권장
3. shouldComponentUpdate
   - 이 메서드는 props나 state를 변경했을 때, 리렌더링을 할지 말지 결정하는 메서드이다.이 메서드는 오직 성능 최적화만을 위한 것이며 렌더링 목적을 방지하는 목적으로 사용하게된다면 버그로 이어질 수 있다.
4. render
   - 이는 가장 기초적인 메서드이기도하고 가장 중요한 메서드이기도 하다. 컴포넌트를 렌더링할 때 필요한 메서드로 유일한 필수 메서드이기도 하다. 함수형 컴포넌트에서는 render를 안쓰고 컴포넌트를 렌더링할 수 있다.
5. getSnapshotBeforeUpdate(prevProps, prevState)
   - 가장 마지막으로 렌더링된 결과가 DOM 등에 반영되기 전에 호출된다. 이 메서드를 사용하면 컴포넌트가 DOM으로부터 스크롤 위치 등과 같은 정보를 이후 변경되기 전에 얻을 수 있다. 이 생명주기 메서드가 반환하는 값은 componentDidUpdate()에 인자로 전달. 함수형에서는 대체할 hook은 아직 없다고 한다.
6. componentDidMount
   - 이 메서드는 컴포넌트를 만들고 첫 렌더링을 마친 후 실행한다. 함수형 Hooks 에서는 useEffect를 활용하여 다음의 기능을 구현할 수 있다.
7. ComponentDidUpdate
   - 이것은 리렌더링을 완료한 후 실행한다. 업데이트가 끝난 직후이므로, DOM관련 처리를 해도 무방하다.
8. componentWillUnmount
   - 이 메서드는 컴포넌트를 DOM에서 제거할 때 실행한다. componentDidMount에서 등록한 이벤트가 있다면 여기서 제거 작업을 해야한다. 함수형 컴포넌트에서는 useEffect CleanUp 함수를 통해 해당 메서드를 구현할 수 있다.
9. componentDidCatch
   - 이 메서드는 컴포넌트 렌더링 도중에 에러가 발생 했을 때 애플리케이션이 멈추지 않고 오류 UI를 보여줄 수 있게 해준다. 해당 hook이 곧 추가될 예정이라고.

## Component vs PureComponent

두 개는 shouldComponentUpdate 라이프 사이클 메소드를 다루는 방식을 제외하곤 같다. 즉, PureComponent는 shouldComponentUpdate 라이프 사이클 메소드가 이미 적용 된 버전의 React.Component 클래스라고 보면 된다. React.Component를 확장(extends)해서 컴포넌트를 만들 때, shouldComponentUpdate 메서드를 별도로 선언하지 않았다면, 컴포넌트는 props, state 값이 변경되면 항상 리렌더링(re-render) 하도록 되어 있다.하지만, React.PureComponent를 확장해서 컴포넌트를 만들면, shouldComponentUpdate 메서드를 선언하지 않았다고 하더라도, PureComponent 내부에서 props와 state를 shallow level 안에서 비교 하여, 변경된 값이 있을 시에만 리렌더링 하도록 되어 있다. 그렇다면, 항상 React.PureComponent를 사용 하는 게 좋다고 할 수 있을까? 대답은 당연히 아니다. 위에서도 언급 했지만, PureComponent는 shallow level로만 데이터를 비교하기 때문에, nested object 등의 변경된 데이터는 감지하지 못하기 때문에 React.Component의 shouldComponentUpdate 직접 다뤄야 한다. 또한, 퍼포먼스 적으로도 모든 컴포넌트에 PureComponent를 사용 하는 것은 오히려 앱을 더 느리게 할 수도 있다.

> 참고 출처
> [https://ko.reactjs.org/docs/react-api.html#reactpurecomponent],[https://usecode.pw/react-%EC%9D%B4%ED%95%B4-%EA%B8%B0%EC%B4%88-class-vs-pure-vs-function-component/],[https://kyun2da.dev/react/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4%EC%9D%98-%EC%9D%B4%ED%95%B4/#3-shouldcomponentupdate]
