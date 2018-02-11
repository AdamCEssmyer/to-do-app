function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
  });
}



    //get the text
    let title = newToDoText.value;

    //create new li
    let newLi = document.createElement('li');

    //create new input
    let checkbox = document.createElement('input');

    // set input's type to checkbox
    checkbox.type = "checkbox";

    //set title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach li to ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    //delete task
    var deleteTask = function() {
      console.log("Delete task...");
      var listItem = this.parentNode;
      var ul = listItem.parentNode;
      ul.removeChild(listItem);
    }


window.onload = function() {
  alert("The window has loaded!");
  onReady();
  }
};
