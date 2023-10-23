/*For this assignment you will be combining your knowledge of DOM access and events to build a todo app!
As a user, you should be able to:

Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)

save to loccalStorage*/
const todoInput=document.querySelector("input[name='todoform']");
const ul=document.querySelector("ul");
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
for(let i=0; i<savedTodos.length;i++){
    const newTodo = document.createElement('li');
    newTodo.innerText=savedTodos[i].todo;
    if(savedTodos[i].isCompleted){
        newTodo.isCompleted = true;
        newTodo.style.textDecoration='line-through';
    }
    else{
        newTodo.isCompleted=false;
    }
    ul.appendChild(newTodo);
}



ul.addEventListener("click", function(e){
    if(e.target.tagName=== 'BUTTON'){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName==='LI'){
        e.target.classList.toggle('done');
            if(e.target.classList.contains('done')){
                e.target.isCompleted=true;
            }
            else{
                e.target.isCompleted=false;
            }
    }
});
const formElement = document.querySelector("form");
formElement.addEventListener("submit", function(e){
    e.preventDefault();
    const newTodo = document.createElement("li");
    newTodo.innerText=`${todoInput.value} `;
    newTodo.isCompleted=false;
    formElement.reset();
    savedTodos.push({todo: newTodo.innerText, isCompleted: false});
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    ul.append(newTodo);
   
    
    
  
    
});