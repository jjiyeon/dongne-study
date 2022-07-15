interface Todo {
  id?: number;
  isCompleted?: false;
  todoText: string;
}

export default class TodoList {
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private addBtn: HTMLButtonElement;
  private ul: HTMLUListElement;
  private list: Todo[] = [];

  constructor(el: Element) {
    this.form = el.querySelector("#todoForm")!;
    this.input = el.querySelector("#todoTitle")!;
    this.addBtn = el.querySelector("button")!;
    this.ul = el.querySelector("#todoList")!;

    this.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.addItem(this.input.value);
      this.render();
    });
  }

  public render() {
    this.input.value = "";
  }

  public addItem(todo: string) {
    let todoItem: Todo = {
      isCompleted: false,
      todoText: todo,
    };
    this.list.push(todoItem);
    this.ul.appendChild(this.appendItem(todoItem));
  }
  public appendItem(todo: Todo): HTMLLIElement {
    let li = document.createElement("li");
    li.textContent = todo.todoText;
    return li;
  }
}
