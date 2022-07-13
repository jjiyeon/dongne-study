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

두 개는 shouldComponentUpdate 라이프 사이클 메소드를 다루는 방식을 제외하곤 같다. 즉, PureComponent는 shouldComponentUpdate 라이프 사이클 메소드가 이미 적용 된 버전의 React.Component 클래스라고 보면 된다. React.Component를 확장(extends)해서 컴포넌트를 만들 때, shouldComponentUpdate 메서드를 별도로 선언하지 않았다면, 컴포넌트는 props, state 값이 변경되면 항상 리렌더링(re-render) 하도록 되어 있다.하지만, React.PureComponent를 확장해서 컴포넌트를 만들면, shouldComponentUpdate 메서드를 선언하지 않았다고 하더라도, PureComponent 내부에서 props와 state를 shallow level 안에서 비교 하여, 변경된 값이 있을 시에만 리렌더링 하도록 되어 있다. 그렇다면, 항상 React.PureComponent를 사용 하는 게 좋다고 할 수 있을까? 대답은 당연히 아니다. 위에서도 언급 했지만, PureComponent는 얕은 비교로만 데이터를 비교하기 때문에, 중첩된 객체 등의 복잡한 데이터는 감지하지 못하기 때문에 React.Component의 shouldComponentUpdate 직접 다뤄야 한다. 또한, 퍼포먼스 적으로도 모든 컴포넌트에 PureComponent를 사용 하는 것은 오히려 앱을 더 느리게 할 수도 있다.

## 제어 컴포넌트와 비제어 컴포넌트

HTML에서 input, textarea, select와 같은 폼 엘리먼트는 일반적으로 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트한다. React에서는 변경할 수 있는 state가 일반적으로 컴포넌트의 state 속성에 유지되며 setState()에 의해 업데이트된다.

우리는 React state를 “신뢰 가능한 단일 출처 (single source of truth)“로 만들어 두 요소를 결합할 수 있다. 그러면 폼을 렌더링하는 React 컴포넌트는 폼에 발생하는 사용자 입력값을 제어한다. 이러한 방식으로 React에 의해 값이 제어되는 입력 폼 엘리먼트를 “제어 컴포넌트 (controlled component)“라고 한다.

```
<form onSubmit={this.handleSubmit}>
   <label>
      Name:
      <input type="text" value={this.state.value} onChange={this.handleChange} />
   </label>
   <input type="submit" value="Submit" />
</form>
```

value 어트리뷰트는 폼 엘리먼트에 설정되므로 표시되는 값은 항상 this.state.value가 되고 React state는 신뢰 가능한 단일 출처 (single source of truth)가 된다. React state를 업데이트하기 위해 모든 키 입력에서 handleChange가 동작하기 때문에 사용자가 입력할 때 보여지는 값이 업데이트된다.
제어 컴포넌트로 사용하면, input의 값은 항상 React state에 의해 결정된다.

대부분의 경우에 제어 컴포넌트를 사용하는것이 좋다. 모든 state 업데이트에 대한 이벤트 핸들러를 작성하는 대신 비제어 컴포넌트를 만들려면 ref를 사용하여 DOM에서 값을 바로 가져올 수 있다.

```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

ref를 사용하여 input을 사용할 경우, 초기값은 defaultValue를 사용하여 지정할 수 있다. 대신 컴포넌트가 마운트된 후에 defaultValue를 변경해도 DOM의 값이 업데이트되지 않는다.
input type="file"인 경우, 사용자만 값을 설정할 수 있기 때문에 항상 비제어컴포넌트로 사용된다.

## 클래스형 컴포넌트 vs 함수형 컴포넌트

클래스형과 함수형은 명칭으로도 특징을 알 수 있는데, 함수형 컴포넌트는 말그대로 자바스크립트 함수이다. 클래스 컴포넌트는 특징이 있는데, 생성자 메서드로 state의 초기값을 생성해 주어야 하고, super(props)를 반드시 호출해야 한다. 생명주기 메서드는 클래스 컴포넌트에서 사용할 수 있고, 함수형에서는 hook을 사용하는것을 권장한다. 공통점을 들자면 state를 직접 조작하는것이 아닌, setState useState와 같은 함수를 반드시 사용하여 조작해야 한다는 점이다.

클래스형 컴포넌트는 다른 말로 Stateful 컴포넌트, 함수형 컴포넌트는 Stateless 컴포넌트라고 하기도 한다. 클래스형 컴포넌트는 로직과 상태를 컴포넌트 내에서 구현하기 때문에 stateful로 불리는 것이며 상대적으로 복잡한 UI 로직을 가지고 있다. 반면 함수형 컴포넌트는 state를 사용하지 않고 단순하게 데이터를 받아서(props) UI에 뿌려주기 때문에 stateless라고 불리는 것이다.

> 참고 출처
> [https://ko.reactjs.org/docs/react-api.html#reactpurecomponent],[https://usecode.pw/react-%EC%9D%B4%ED%95%B4-%EA%B8%B0%EC%B4%88-class-vs-pure-vs-function-component/],[https://kyun2da.dev/react/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4%EC%9D%98-%EC%9D%B4%ED%95%B4/#3-shouldcomponentupdate],[https://code.tutsplus.com/ko/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541],[https://ko.reactjs.org/docs/forms.html#controlled-components],[https://ko.reactjs.org/docs/uncontrolled-components.html]
