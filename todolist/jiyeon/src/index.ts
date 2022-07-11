class Todo {
  constructor(public data: string) {}
  public hello() {
    return `hello ${this.data}`;
  }
}

const todo = new Todo("typescript").hello();
console.log(todo);
