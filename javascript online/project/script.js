// selector 
// querySelector

// page ==> document
// wondow 

// function fun(arg) {
//     console.log(arg);
// }
// fun("Himanshu Shekhar")
var page = document.querySelector('.outer main');
var dialogBox = document.querySelector('.dialog-box');


// console.log(page);

function add() {
    dialogBox.style.display = 'flex';
}


function addTodo() {
    let title = document.getElementById("task-title");
    let description = document.getElementById("task-description");
    var todo = `<div class="todo">
                    <header>
                        <span>${title.value}</span>
                    </header>
                    <div class="todo-text">
                        <textarea>${description.value}</textarea>
                    </div>
                </div>`;
    page.innerHTML += todo;
    title.value = "";
    description.value = "";
    dialogBox.style.display = 'none';

}