const toDoList = [
  { name: "make dinner", duedate: "2022-12-22" },
  {
    name: "wash dishes",
    duedate: "2022-12-23",
  },
];
renderToDOList();

function renderToDOList() {
  let todoListHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    const todoObject = toDoList[i];
    // const name =todoObject.name;
    // const duedate=todoObject.duedate
    const { name, duedate } = todoObject;
    const html = `<p>${name}${duedate}</p> <button onclick=" todoList.splice(${i},1);renderToDoList();">Delete</button>`;
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
    // dueDate:duedate,
    name,
    duedate,
  });
  inputElement.value = "";
  renderToDOList();
}
