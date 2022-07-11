"use strict";
class Todo {
    constructor(data) {
        this.data = data;
    }
    hello() {
        return `hello ${this.data}`;
    }
}
const todo = new Todo("typescript").hello();
console.log(todo);
