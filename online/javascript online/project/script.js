// selector 
// querySelector

// page ==> document
// wondow 

// function fun(arg) {
//     console.log(arg);
// }
// fun("Himanshu Shekhar")
var page = document.querySelector('.outer main');
// console.log(page);
var dialogBox = document.querySelector('.dialog-box');
// console.log(dialogBox);

// console.log(page);
// show the dialog box to add todo
function add() {
    dialogBox.style.display = 'flex';
}

// add a todo component
function addTodo() {
    let title = document.getElementById("task-title");
    let description = document.getElementById("task-description");
    if (title.value == "" || description.value == "") {
        alert("Please fill all the fields");
        return;
    }
    var todo = ` <div class="todo">
                    <header>
                        <span>${title.value}</span>
                        <span class="close">x</span>
                        <span class="minimize">_</span>
                    </header>
                    <div class="todo-text">
                        <textarea>${description.value}</textarea>
                    </div>
                </div>`;

    page.innerHTML += todo;
    title.value = "";
    description.value = "";
    dialogBox.style.display = 'none';
    let todoArr = document.querySelectorAll(".todo")
    console.log(todoArr.length);
    for (var i = 0; i < todoArr.length; i++) {
        todoArr[i].querySelector(".close").addEventListener("click", function (e) {
            let box = e.target.closest(".todo")
            box.remove();
        });
        todoArr[i].querySelector(".minimize").addEventListener("click", function (e) {
            // console.log("minimize click hua");
            let box = e.target.closest(".todo");
            let todoText = box.querySelector(".todo-text");
            if (todoText.style.display != "none") {
                box.style.height = "30px";
                todoText.style.display = "none";
            } else {
                box.style.height = "300px";
                todoText.style.display = "block";
            }
        });
    }
}


function close() {

}

