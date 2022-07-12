/**
 * 각자 편한 방식으로,
 * input의 데이터 받아서, 데이터 추가하고 뷰 그려주기
 *
 */
class Todo {
  constructor(public data: string) {}
  public hello() {
    return `hello ${this.data}`;
  }
}

const todo = new Todo("typescript").hello();
console.log(todo);
