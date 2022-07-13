interface appTarget {
  target: HTMLElement;
  initialState: { todoText: string };
}

export default class TodoList {
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private addBtn: HTMLButtonElement;

  constructor(el: Element) {
    this.form = el.querySelector("#todoForm")!;
    this.input = el.querySelector("#todoTitle")!;
    this.addBtn = el.querySelector("button")!;

    this.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("클릭했숑?");
    });
  }
}
