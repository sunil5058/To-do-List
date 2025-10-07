const toDoList = [
  { name: "make dinner", dueDate: "2022-12-22" },
  { name: "wash dishes", dueDate: "2022-12-23" },
];
renderToDoList();

function renderToDoList() {
  let todoListHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    const todoObject = toDoList[i];
    // const name =todoObject.name;
    // const dueDate=todoObject.dueDate
    const { name, dueDate } = todoObject;
    const html = ` <div>${name}</div> 
    <div>${dueDate} </div>
     <button class="delete-todo-button" onclick="toDoList.splice(${i},1);renderToDoList();">
    Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  toDoList.push({
    // name:name,
    // dueDate:dueDate,
    name,
    dueDate,
  });
  inputElement.value = "";
  renderToDoList();
}
