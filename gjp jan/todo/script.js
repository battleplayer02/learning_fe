const dialogBox = document.getElementById("dialog");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("close");
const todoContainer = document.getElementById("todo_container");

const title = document.getElementById("title");
const todo__text = document.getElementById("todo__text");


addBtn.addEventListener("click", function () {
    dialogBox.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    dialogBox.style.display = "none";
});

function addTodo() {
    let todotext = `<div class="todo-list">
    <div class="todo-header">${title.value}</div>
    <div class="todo-text">${todo__text.value}</div>
    </div>`;
    todoContainer.innerHTML = todoContainer.innerHTML + todotext;
    todo__text.value = "";
    title.value = "";
    dialogBox.style.display = "none";
}

