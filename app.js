function onReady(){

  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteTask  = document.getElementById('deleteTask');

  function createNewToDo() {
      console.log(newToDoText.value);
    if(!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++

    });

    newToDoText.value = '';

    renderTheUI();
      console.log(toDos.length);
  }
      //Render the UI//
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

      toDoList.innerHTML = "";

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

      newLi.innerHTML = toDo.title;

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;

      //Checkbox click needs to change toDo.complete value





      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });

  }

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();

      createNewToDo();
      newToDoText.value = '';
    });

    deleteTask.addEventListener('click', event => {
      event.preventDefault();
      //Get ids that are checked
    });

    function deleteToDo(id){
      toDos = toDos.filter(item => item.id !== id);
    }


    renderTheUI()

  }

  window.onload = function(){
    onReady();
  }
