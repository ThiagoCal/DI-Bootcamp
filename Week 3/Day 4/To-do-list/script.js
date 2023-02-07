let container = document.querySelector("#container");

const tasks = [];

function createForm() {
  let form = document.createElement("form");
  container.appendChild(form);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "task");
  input.setAttribute("class", "input-form");
  let submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("class", "submit-btn");
  submitBtn.textContent = "ADD";
  form.appendChild(input);
  // let submit = document.querySelector(".submit")
  // submit.addEventListener("click", addTask)
  form.appendChild(submitBtn);
  form.addEventListener("submit", addTask);
}

createForm();

function createList() {
  let divList = document.createElement("div");
  divList.setAttribute("class", "listTasks");
  container.appendChild(divList);
}

createList();

let id = 0;
function addTask(e) {
  e.preventDefault();
  console.log(e.target.task.value);
  let task = e.target.task.value;
  if (task !== "") {
    const taskObject = new Object();
    taskObject.task_id = id++;
    taskObject["data-task-id"] = taskObject.task_id;
    let datatask = taskObject["data-task-id"];
    taskObject.taskText = task;
    taskObject.done = false;
    let divTask = document.createElement("div");
    divTask.setAttribute("class", "task");
    divTask.setAttribute("id", taskObject.task_id);
    divTask.setAttribute("data", datatask);
    // let xButton = document.createElement("button")
    // xButton.setAttribute("type", "button");
    let fontAwesome = document.createElement("i");
    fontAwesome.setAttribute("class", "fa-thin fa-user");
    // xButton.appendChild(fontAwesome)
    divTask.appendChild(fontAwesome);
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "checkbox");
    divTask.appendChild(check);
    let taskText = document.createTextNode(task);
    divTask.appendChild(taskText);
    let divList = document.querySelector(".listTasks");
    divList.appendChild(divTask);
    let checkBox = divTask.querySelector(".checkbox");
    checkBox.addEventListener("change", doneTask);

    let deleteTask = divTask.querySelector(".fa-thin");
    deleteTask.addEventListener("click", removeTask);

    tasks.push(taskObject);
  }
  console.log(tasks);
}

function doneTask(e) {
  e.preventDefault();
  let div = e.target.parentElement
  let value = parseInt(e.target.parentElement.id);
  tasks.map((task) => {
    if (task.task_id === value) {
      if (task.done === false) {
        task.done = true;
        div.setAttribute("class", "done")
        console.log(div)
        
      } else {
        task.done = false;
        div.removeAttribute("class","done")
        console.log(div)
      }
    }
  });
  console.log(tasks);
}


function removeTask(e) {
  e.preventDefault();
  let div = e.target.parentElement
  let value = parseInt(e.target.parentElement.id);
  tasks.map((task) => {
    if (task.task_id === value) {
        div.remove()
      } 
  });
  console.log(tasks);
}