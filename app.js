/*For this assignment you will be combining your knowledge of DOM access and events to build a todo app!
As a user, you should be able to:

Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo

save to loccalStorage*/


const ul=document.querySelector("ul");
const todoInput=document.querySelector("input[name='todoform']");
ul.addEventListener("click", function(e){
    if(e.target.tagName=== 'BUTTON'){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName==='LI'){
        e.target.classList.toggle('done');
            if(e.target.classList.contains('done')){
                isCompleted=true;
            }
            else{
                isCompleted=false;
            }
    }
});
const formElement = document.querySelector("form");
formElement.addEventListener("submit", function(e){
    e.preventDefault();
    const newTodo = document.createElement("li");
    const removeBtn = document.createElement('button');
    removeBtn.innerText = "Remove Item";
    newTodo.innerText=`${todoInput.value} `;
    newTodo.appendChild(removeBtn);
    ul.append(newTodo);
    formElement.reset();
});