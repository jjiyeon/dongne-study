> 이 글은 [https://poiemaweb.com/js-object-oriented-programming]로 학습하면서 정리한 문서입니다.

# 객체지향 프로그래밍

객체지향 프로그래밍은 실세계에 존재하고 인지하고 있는 객체(Object)를 소프트웨어의 세계에서 표현하기 위해 객체의 핵심적인 개념 또는 기능만을 추출하는 추상화(abstraction)을 통해 모델링하려는 프로그래밍 패러다임을 말한다. 객체지향 프로그래밍은 보다 유연하고 유지보수하기 쉬우며 확장성 측면에서도 유리한 프로그래밍을 하도록 의도되었고, 대규모 소프트웨어 개발에 널리 사용되고 있다.

## 1. 클래스 기반 언어

클래스 기반 언어는 클래스로 객체의 자료구조와 기능을 정의하고 생성자를 통해 인스턴스를 생성한다. 클래스란 같은 종류의 집단에 속하는 속성(attribute)과 행위(behavior)을 정의한 것으로 객체지향 프로그램의 기본적인 사용자 정의 테이터형이라고 할 수 있다. 결국 클래스는 객체 생성에 사용되는 패턴 혹은 청사진일 뿐이며 new 연산자를 통한 인스턴스화 과정이 필요하다. 모든 인스턴스는 오직 클래스에서 정의된 범위 내에서만 작동하며 런타임에 그 구조를 변경할 수 없다.

## 2. 프로토타입 기반 언어

자바스크립트는 멀티 패러다임 언어로 명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향 언어다. (클래스 개념이 ES6에 들어와서 생겼지만) 자바스크립트에서 객체 생성 방법은 아래와 같다. 자바스크립트는 이미 생성된 인스턴스의 자료구조와 기능을 동적으로 변경할 수 있다는 특징이 있다.

- 객체 리터럴
- Object() 생성자 함수
- 생성자 함수

## 3. 생성자 함수와 인스턴스의 생성

자바스크립트는 생성자 함수와 new 연산자를 통해 인스턴스를 생성할 수 있다. 이때 생성자 함수는 클래스이자 생성자의 역할을 한다.

```
function Animal(name){
  this.name = name;
  this.setName = function(name){
    this.name = name;
  }
  this.getName = function(){
    return this.name;
  }
}
let animalFriend = new Animal('Dal');
animalFriend.setName('kkul');
console.log(animalFriend.getName()); //kkul
```

위의 예제는 잘 동작하지만, Animal로 인스턴스를 여러개 생성했을 때 setName, getName이 중복되어 생성되는걸 볼 수 있다. 각 인스턴스가 내용이 동일한 메소드를 각자 소유하는것이다. 이는 메모리 낭비로 생성되는 인스턴스가 많아지거나 메소드가 크거나 많다면 무시할 수 없는 문제이다. 이 문제의 해결은 프로토타입에 있다.

## 4. 프로토타입 체인과 메소드의 정의

모든 객체는 프로토타입이라는 다른 객체를 가리키는 내부 링크를 가지고 있다. 프로토타입을 통해 직접 객체를 연결할 수 있는데 이를 프로토타입 체인이라 한다. 프로토타입을 이용하여 생성자 함수 내부의 메소드를 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체로 이동시키면 생성자 함수에 의해 생성된 모든 인스턴스는 프로토타입 체인을 통해 프로토타입 객체의 메소드를 참조할 수 있다.

```
function Animal(name){
  this.name = name;
  Animal.prototype.setName = function(name){
    this.name = name;
  }
  Animal.prototype.getName = function(){
    return this.name;
  }
}
```

## 5. 상속(Inheritance)

클래스 기반 언어에서 객체는 클래스의 인스턴스이며 클래스는 다른 클래스로 상속될 수 있다. 자바스크립트는 기본적으로 프로토타입을 통해 상속을 구현한다. 이것은 프로토타입을 통해 객체가 다른 객체로 직접 상속된다는 의미이다. 이러한 점이 자바스크립트의 약점으로 여겨지기도 하지만 프로토타입 상속 모델은 사실 클래스 기반보다 강력한 방법이다. 자바스크립트의 상속 구현방식은 크게 두가지인데 아래와 같다.

    1. 의사 클래스 패턴 상속(Pseudo-classical Inheritance)
      의사 클래스 패턴은 자식 생성자 함수의 prototype 프로퍼티를 부모 생성자 함수의 인스턴스로 교체하여 상속을 구현하는 방법. 부모와 자식 모두 생성자 함수를 정의하여야 한다. 다만 아래와 같은 문제점이 있다
      - new 연산자를 통해 인스턴스를 생성한다.
        이는 자바스크립트 프로토타입 본질에 모순되는것. 또한 new 연산자를 포함하는 것을 잊게 되면 this는 새로운 객체와 바인딩 되지 않고 전역객체에 바인딩 되는 위험이 있다.
      - 생성자 링크의 파괴
      - 객체리터럴
        의사 클래스 패턴 상속은 기본적으로 생성자 함수를 사용하기 때문에 객체리터럴 패턴으로 생성한 객체의 상속에는 적합하지 않다.
    2. 프로토타입 패턴 상속(Prototypal Inheritance)
       프로토타입 패턴 상속은 Object.create 함수를 사용하여 객체에서 다른 객체로 직접 상속을 구현하는 방식이다. 1번의 방식보다 더 간편하다. 또한 new 연산자가 필요없으며, 생성자 링크도 파괴되지 않으며, 객체리터럴에도 사용할 수 있다.

```
var parent = {
  name: 'parent',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

// create 함수의 인자는 객체이다.
var child = Object.create(parent);
child.name = 'child';

// var child = Object.create(parent, {name: {value: 'child'}});

parent.sayHi(); // Hi! parent
child.sayHi();  // Hi! child

console.log(parent.isPrototypeOf(child)); // true
```

      Object.create 함수는 매개변수에 프로토타입으로 설정할 객체 또는 인스턴스를 전달하고 이를 상속하는 새로운 객체를 생성한다.

## 6. 캡슐화와 모듈패턴

캡슐화는 관련있는 멤버 변수와 메소드를 클래스와 같은 하나의 틀 안에 담고 외부에 공개될 필요가 없는 정보는 숨기는 것을 말하며 다른 말로 정보 은닉(information hiding)이라고 한다.
