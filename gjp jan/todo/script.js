const dialogBox = document.getElementById("dialog");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("close");
const todoContainer = document.getElementById("todo_container");
const error = document.querySelector(".error");
const title = document.getElementById("title");
const todo__text = document.getElementById("todo__text");

let counter = 0;

// get the todos from local storage and display them
let data = JSON.parse(localStorage.getItem("todos")) || [];

counter = data.length;

for (let i = 0; i < data.length; i++) {
    // add the i index aas id
    let todotext = `<div class="todo-list" todo-id='${i}'>
                        <div class="todo-header">${data[i].title}
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
});

function addTodo() {
    if (todo__text.value !== "" && title.value !== "") {
        let todotext = `<div class="todo-list" todo-id='${counter}'>
                            <div class="todo-header">${title.value}
                                <button>X</button>
                            </div>
                        <div class="todo-text">${todo__text.value}</div>
                        </div>`;
        todoContainer.innerHTML = todoContainer.innerHTML + todotext;
        deletelisteners();
        // GET the old data [] from local storage
        let todos = JSON.parse(localStorage.getItem("todos")) || [];
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
    for (let i = 0; i < delarr.length; i++) {
        delarr[i].addEventListener("click", function (e) {
            let todo = e.target.closest(".todo-list");
            console.log(todo);
            let id = todo.getAttribute("todo-id");
            console.log(id);
            let data = JSON.parse(localStorage.getItem("todos"));
            let newData = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].id != id) {
                    newData.push(data[i]);
                }
            }
            console.log(newData);
            localStorage.setItem("todos", JSON.stringify(newData));
            todo.classList.add("gayab");
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







