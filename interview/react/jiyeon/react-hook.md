# Hook

Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수.
내장 Hook을 통해서 상태로직을 재사용하고, Hook을 통해 서로 비슷한 것을 함수 묶음으로 나누어 사용할 수 있다.

- state: 동적인 상태 데이터
- props: 읽기전용 정적 데이터, 위에서 아래로 부모에서 자식에게 내려가는 데이터를 말한다.

## Hook의 종류

- 기본 Hook

  1. useState
  2. useEffect
  3. useContext

- 추가 Hooks
  1. useReducer
  2. useCallback
  3. useMemo
  4. useRef
  5. useImperativeHandle
  6. useLayoutEffect
  7. useDebugValue
