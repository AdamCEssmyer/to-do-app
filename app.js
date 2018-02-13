function onReady() {

  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

    function createNewToDo() {

        if(!newToDoText.value) { return; }

        toDos.push({
          title: newToDoText.value,
          complete: false,
          id: id++
        });

        newToDoText.value = '';

        renderTheUI();
    }

    //renderTheUI
      function renderTheUI(){
          //delete button
          object.addEventListener("click", newLi);

        const toDoList = document.getElementById('toDoList');

        toDoList.textContent = '';

        toDos.forEach(function(toDo) {
          const newToDo = document.createElement('li');

          const checkbox = document.createElement('input');
          checkbox.type = "checkbox";

          const title = document.createElement('span');
          title.textContent = toDo.title;

          toDoList.appendChild(newLi);
          newLi.appendChild(checkbox);
        });

          //Delete ToDo function
          function deleteToDo(id){
            if(toDos = toDos.filter(item => item.id ! == id)){
            return true;
          } else {
            return false;
          }
        }

      }

      //Event Listener
      addToDoForm.addEventListener('submit', event =>{
        event.preventDefault();
          deleteToDo(toDo.id);
          createNewToDo();
          renderTheUI();


      });

window.onload = function() {
  onReady();
}
