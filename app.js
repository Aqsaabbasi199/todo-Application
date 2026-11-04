let AddTask = document.getElementById("AddTask")
let list = document.getElementById("list")
 let task = document.getElementById("task")
 let userTodo = AddTask.addEventListener("click", () => {
 if(AddTask.innerHTML == "Add Task"){

 

  

    list.innerHTML += ` <div class ="main"> <li> ${task.value}</li> <div> <button onclick ="edit(this)"> Edit </button>  <button> Delet </button> </div> </div>  `
    task.value = " ";


     }else{
        let updatedtodo = task.value;
       userTodo.innerText = updatedtodo;

task.value = "";
AddTask.innerHTML = "Add Task";
           userTodo.innerText = updatedtodo;

}})
function edit(element) {
   userTodo = element.parentNode.parentNode.querySelector("li");

task.value = userTodo.innerText;

    AddTask.innerHTML = "Save";


}


function deleteTask(element) {
    element.parentNode.parentNode.remove();
}