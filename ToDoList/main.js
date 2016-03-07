var todoInput = document.getElementsByClassName("todo-input")[0];
var todoList = document.getElementById("todo-list");
var buttonAddTodo = document.getElementsByClassName("add-todo")[0];

function createTodoItem(content){
    var item = document.createElement('li');
    item.innerHTML = content;
    return item;
};

todoInput.addEventListener('keydown', function(event){
    if (event.which == 13 || event.keyCode == 13) {
        todoList.appendChild(createTodoItem(event.target.value));
    };
});

buttonAddTodo.addEventListener('onclick', function(event){
    todoList.appendChild(createTodoItem(event.target.value));
});
