import {
  addNewTodo,
  getTodoElements,
  saveToLocalStorage,
  Todo,
  TODO_LOCAL_STORAGE_KEY,
} from "./todo/index.js";

const localStorageTodos = JSON.parse(
  localStorage.getItem(TODO_LOCAL_STORAGE_KEY)
);
if (localStorageTodos) {
  [...localStorageTodos].forEach(addNewTodo);
}

// DODAVANJE NOVOG TODO-a
const todoForm = document.forms.namedItem("todo-form");
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addNewTodo(new Todo(todoForm.querySelector("input").value));
  todoForm.reset();
});

// Klikom na button "Obriši sve odabrane" bi se trebali
// ukloniti svi todo-ovi koji su "gotovi"
// P.S. Ne zaboravite local storage
const _getAllDoneTodoElements = () =>
  getTodoElements().filter(
    (todoElement) => todoElement.querySelector("input").checked
  );

document.getElementById("remove-done").addEventListener("click", () => {
  _getAllDoneTodoElements().forEach((todoElement) => todoElement.remove());
  saveToLocalStorage();
});
