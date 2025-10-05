const toDoList=['make dinner', 'add dishes'];

for(let i=0;i<toDoList.length;i++){
    const todo=toDoList[i];
    const html=`<p>${todo}</p>`

}


function addToDo(){
   const inputElement= document.querySelector('.js-name-input');
   const name =inputElement.value
   toDoList.push(name);
   console.log(toDoList)

   inputElement.value='';





}