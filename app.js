function onReady(){

  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const addToDoForm = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {

    if(!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++

    });

    newToDoText.value = '';

    renderTheUI();

  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;

      //delete button//

      object.addEventListener("delete", newLi, deleteToDo => toDo.id, renderTheUI());

      function deleteToDo(id){
        toDos = toDos.filter(item => item.id !== id);


      }

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });

  }

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
      newToDoText.value = '';
    });

    renderTheUI()

  }
