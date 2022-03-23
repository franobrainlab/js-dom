class Todo {
  text;
  isDone;

  constructor(text, isDone = false) {
    this.text = text;
    this.isDone = isDone;
  }
}

const todos = [new Todo("Primjer1"), new Todo("Primjer2", true)];

todos.forEach((todo, i) => addNewTodo(todo, i));

// DODAVANJE NOVOG TODO-a
// const todoForm = document.getElementById("todo-form");
const todoForm = document.forms.namedItem("todo-form");
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // const newTodoInput = document.getElementById("new-todo");
  // const formElement = event.target;
  // const newTodoInput = formElement.querySelector("#new-todo");
  const inputValue = todoForm.querySelector("input")?.value;
  if (!inputValue) {
    return;
  }
  const newTodo = new Todo(inputValue);
  todos.push(newTodo);
  addNewTodo(newTodo, todos.length - 1);
  todoForm.reset();
});

function addNewTodo({ text, isDone }, i) {
  const divElement = document.createElement("div");
  divElement.innerHTML = `
    <input type="checkbox" name="checkbox-${i}" id="checkbox-${i}"/>
    <label for="checkbox-${i}">${text}</label>
  `;
  // <input type="checkbox" name="checkbox-${i}" id="checkbox-${i}" ${isDone ? "checked" : ""}/>
  const inputElement = divElement.querySelector("input");
  inputElement.checked = isDone;
  document.querySelector("main").appendChild(divElement);
}
