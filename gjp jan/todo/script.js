const dialogBox = document.getElementById("dialog");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("close");
const todoContainer = document.getElementById("todo_container");
const error = document.querySelector(".error");
const title = document.getElementById("title");
const todo__text = document.getElementById("todo__text");
let editMode = -1;
let counter = 0;

// get the todos from local storage and display them
let data = JSON.parse(localStorage.getItem("todos")) || [];

counter = data.length;

for (let i = 0; i < data.length; i++) {
    // add the i index aas id
    let todotext = `<div class="todo-list" todo-id='${i}'>
                        <div class="todo-header">
                            <span id='todo-header-text'>${data[i].title}</span>
                            <i class="fa fa-edit" style="font-size:24px;margin-right:20px"></i>
                            <button>X</button>
                        </div>
                        <div class="todo-text">${data[i].text}</div>
                    </div>`;
    todoContainer.innerHTML = todoContainer.innerHTML + todotext;
}


deletelisteners()

addBtn.addEventListener("click", function () {
    dialogBox.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    dialogBox.style.display = "none";
    error.classList.add("gayab");
    todo__text.value = "";
    title.value = "";
});

function addTodo() {
    if (todo__text.value !== "" && title.value !== "") {
        // GET the old data [] from local storage
        let todos = JSON.parse(localStorage.getItem("todos")) || [];

        if (editMode !== -1) {
            // update the old data
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id == editMode) {
                    todos[i].title = title.value;
                    todos[i].text = todo__text.value;
                }
            }
            // set the new data to local storage
            localStorage.setItem("todos", JSON.stringify(todos));

            // set it on the view
            let todo = document.querySelector(`[todo-id='${editMode}']`);
            todo.querySelector("#todo-header-text").innerText = title.value;
            todo.querySelector(".todo-text").innerText = todo__text.value;
            editMode = -1;
            dialogBox.style.display = "none";
            return;
        }
        let todotext = `<div class="todo-list" todo-id='${counter}'>
                            <div class="todo-header">
                                <span id='todo-header-text'>${title.value}</span>
                                <i class="fa fa-edit" style="font-size:24px;margin-right:20px"></i>
                                <button>X</button>
                            </div>
                            <div class="todo-text">${todo__text.value}</div>
                        </div>`;
        todoContainer.innerHTML += todotext;
        deletelisteners();
        // add the new todo to the old data
        todos.push({
            id: counter,
            title: title.value,
            text: todo__text.value
        });
        counter += 1
        // set the new data to local storage
        localStorage.setItem("todos", JSON.stringify(todos));
        todo__text.value = "";
        title.value = "";
        dialogBox.style.display = "none";
    } else {
        error.classList.remove("gayab");
    }
}



function deletelisteners() {
    const delarr = document.querySelectorAll(".todo-header button");
    const editarr = document.querySelectorAll(".todo-header i");
    console.log(editarr);
    for (let i = 0; i < delarr.length; i++) {
        delarr[i].addEventListener("click", function (e) {
            let todo = e.target.closest(".todo-list");
            console.log(todo)
            let id = todo.getAttribute("todo-id");
            console.log(id);
            let data = JSON.parse(localStorage.getItem("todos"));
            let newData = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].id != id) {
                    newData.push(data[i]);
                }
            }
            localStorage.setItem("todos", JSON.stringify(newData));
            todo.classList.add("gayab");
        });

        editarr[i].addEventListener("click", function (e) {
            dialogBox.style.display = "flex";
            let todo = e.target.closest(".todo-list");
            let id = todo.getAttribute("todo-id");
            editMode = id;
            console.log(todo)
            // first way 
            //  get the data of title and desc from the todo
            title.value = todo.querySelector("#todo-header-text").innerText;
            todo__text.value = todo.querySelector(".todo-text").innerText;
            //  get the data of title and desc from the local storage
        });
    }
}


// let arr = [1, 2, 3, 4, 5];

// arr.push(6);
// console.log(arr);

// arr.pop();

// console.log(arr);






// let obj = {
//     "key": "value",
//     name: "himanshu",
//     city: "new delhi"
// }

// let obj2 = new Object();
// obj2.name = "himanshu";

// console.log(obj2["name"]);

// let keys = Object.keys(obj);

// console.log(keys)



// let obj3 = {
//     name: "himanshu",
//     city: "new delhi",
// }



// console.log(obj3["name"])
// console.log(obj3.name)




// console.table(data);



// localStorage.setItem("todos", "hello");

// console.log(typeof localStorage.getItem("todos"));



// let obj = {
//     name: "himanshu",
//     city: "new delhi",
// }

// let objstr = JSON.stringify(obj);
// console.log(objstr);

// let newObj = JSON.parse(objstr);
// console.log(newObj);







