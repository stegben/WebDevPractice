
var todoInput = document.getElementsByClassName("todo-input")[0];
var todoList = document.getElementsByClassName("todo-list")[0];
var buttonAddTodo = document.getElementsByClassName("add-todo")[0];
var todoLeftCount = document.getElementsByClassName("todo-left-count")[0];

function createTodoItem(content){
    var item = document.createElement('li');
    var check_box = document.createElement('input');
    var todo_content = document.createElement('label');
    var btnRemove = document.createElement('button');

    check_box.type = "checkbox";
    check_box.className = "toggle";

    todo_content.innerHTML = content;

    btnRemove.className = "remove";
    btnRemove.innerHTML = "remove";

    item.appendChild(check_box);
    item.appendChild(todo_content);
    item.appendChild(btnRemove);

    return item;
};


function isClickOnToggle(target){
    return (
        target &&
        target.nodeName === 'INPUT' &&
        target.className === 'toggle'
    );
};


function isClickOnRemove(target){
    return (
        target &&
        target.nodeName === 'BUTTON' &&
        target.className === 'remove'
    );
};


function isDone(item){
    return item.className === "done";
};


function changeTodoLeftCount(){
    var total = todoList.childNodes.length;
    var done = 0;
    var children = todoList.childNodes;
    for (var item in children){
        var todo_item = children[item];
        if (isDone(todo_item)){
            done += 1;
        };
    };
    todoLeftCount.innerHTML = total - done;
};


function addTodoList(){
    content = todoInput.value;
    if (content !== ""){
        todoList.appendChild(createTodoItem(content));
        changeTodoLeftCount();
    };
    todoInput.value = "";
};


todoInput.addEventListener('keydown', function(event){
    if (event.which === 13 || event.keyCode === 13) {
        addTodoList();
    };
});


buttonAddTodo.addEventListener('click', function(event){
    addTodoList();
});


todoList.addEventListener('click', function(event){
    var target = event.target;
    if (isClickOnToggle(target)){
        var todo_item = target.parentNode;
        if (target.checked){
            todo_item.className = "done";
        } else{
            todo_item.className = "";
        };
        changeTodoLeftCount();
    };
});


todoList.addEventListener('click', function(event){
    var target = event.target;
    if (isClickOnRemove(target)){
        var todo_item = target.parentNode;
        todo_item.parentNode.removeChild(todo_item);
        changeTodoLeftCount();
    };
});
