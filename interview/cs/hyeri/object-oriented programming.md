# 📝 목차

1. [✔️객체 지향 프로그래밍?](#✔️객체-지향-프로그래밍?)
2. [✔️객체 지향 프로그래밍의 특징](#✔️객체-지향-프로그래밍의-특징)
3. [✔️OOP의 장/단점](#✔️OOP의-장/단점)

<br/>
<hr/>
<br/>

### ✔️객체 지향 프로그래밍?

- 객체 지향 프로그래밍(영어: Object-Oriented Programming, OOP)은 컴퓨터 프로그래밍의 패러다임 중 하나
- 구현에 필요한 객체를 파악하고 각각의 객체들의 역할이 무엇인지를 정의하여 객체들 간의 상호작용을 통해 프로그램을 만드는 것
- OOP는 코드 재사용성과 생산성의 향상 효과를 볼 수 있고, 유지보수의 편의성 덕택에 협업이 중요하고 규모가 큰 대형 프로젝트에 사용되는 프로그래밍

---

### ✔️객체 지향 프로그래밍의 특징

1. 추상화(abstraction)<br/>
   객체들의 공통적인 특징(기능, 속성)을 도출하는 것

2. 캡슐화(encapsulation)<br/>
   객체가 독립적으로 역할을 할 수 있도록 데이터와 기능을 하나로 묶어 관리하는 것<br/>
   데이터를 보이지 않고 외부와 상호작용을 할 때는 메소드를 이용하여 통신을 한다.

3. 상속성(inheritance)<br/>
   하나의 클래스가 가진 특징(함수, 데이터)을 다른 클래스가 그대로 물려받는 것<br/>
   이미 작성된 클래스를 받아서 새로운 클래스를 생성하는 것<br/>
   기존 코드를 재활용해서 사용함으로써 객체지향 방법의 중요한 기능 중 하나에 속한다.

4. 다형성(polymorphism)<br/>
   동일한 명령의 해석을 연결된 객체에 의존하는 것<br/>

- 오버라이딩(Overriding)<br/>
  부모클래스의 메소드와 같은 이름을 사용하며 매개변수도 같되 내부 소스를 재정의하는 것<br/>
- 오버로딩(Overloading)<br/>
  같은 이름의 함수를 여러 개 정의한 후 매개변수를 다르게 하여 같은 이름을 경우에 따라 호출하여 사용하는 것

5. 동적바인딩(Dynamic Binding)<br/>
   가상 함수를 호출하는 코드를 컴파일할 때, 바인딩을 실행시간에 결정하는 것<br/>
   파생 클래스의 객체에 대해, 기본 클래스의 포인터로 가상 함수가 호출될 때 일어난다.<br/>
   함수를 호출하면 동적 바인딩을 통해 파생 클래스에 오버라이딩 된 함수가 실행<br/>
   프로그래밍의 유연성을 높여주며 파생 클래스에서 재정의한 함수의 호출을 보장(다형 개념 실현)

---

### ✔️OOP의 장/단점

<br/>
<b>OOP의 장점</b><br/>

- 코드 재사용성 증가<br/>
  상속을 통해 프로그래밍시 코드의 재사용을 높일 수 있다.<br/>
  <br/>
- 생산성 향상<br/>
  잘 설계된 클래스를 만들어서 독립적인 객체를 사용함으로써 개발의 생산성을 향상시킬 수 있다.
  <br/>

- 자연적인 모델링<br/>
  우리 일상생활의 모습의 구조가 객체에 자연스럽게 녹아들어 있기 때문에 생각하고 있는 것을 그대로 자연스럽게 구현할 수 있다.

- 유지보수의 우수성<br/>
  프로그램 수정시 추가, 수정을 하더라도 캡슐화를 통해 주변 영향이 적기때문에 유지보수가 쉬워서 매우 경제적이라할 수 있다.

<b>OOP의 단점</b><br/>

- 개발속도가 느린점<br/>
  객체가 처리하려는 것에 대한 정확한 이해가 필요하기에 설계단계부터 많은 시간이 소모 된다.
  <br/>
- 실행속도가 느린점<br/>
  객체지향언어는 대체적으로 실행속도가 느리다.
  <br/>
- 코딩 난이도 상승<br/>
  다중 상속이 지원되는 C++ 같은 경우에 너무 복잡해져 코딩의 난이도가 상승할 수 있다.<br/>

### 🌐 참고 사이트

<a href="https://jeong-pro.tistory.com/95" target="_blank">객체 지향 프로그래밍이 뭔가요? (꼬리에 꼬리를 무는 질문 1순위, 그놈의 OOP)</a>

<a href="http://www.incodom.kr/%EA%B0%9D%EC%B2%B4_%EC%A7%80%ED%96%A5" target="_blank">객체 지향</a>

<a href="https://velog.io/@gillog/OOP%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D" target="_blank">OOP(객체 지향 프로그래밍)</a>
