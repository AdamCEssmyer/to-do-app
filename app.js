let id = 1
let toDos = [{id: 0, title: 'first item'}]
const addToDoForm = document.getElementById('addToDoForm')
const newToDoText = document.getElementById('newToDoText')
const toDoList = document.getElementById('toDoList')
const deleteTask  = document.getElementById('deleteTask')

// adds a new todo to the toDo array with the given title
function createToDo(title) {
  if(!title) return

  toDos.push({
    title: title,
    complete: false,
    id: id++
  })
}

// delete a todo given an id
function deleteTodo(id) {
console.log('should delete', id)
  toDos = toDos.filter(function(todo) {
    return todo.id === id
  })
}

function render() {
  const toDoList = document.getElementById('toDoList')

  // wipe everything out of the element
  toDoList.innerHTML = ""

  // for each todo, add it to the DOM
  toDos.forEach(function(toDo) {
    const listItem = document.createElement('li')

    listItem.innerHTML = toDo.title

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = "delete"
    // this creates a closure in that the id referenced here is "closed over"
    deleteButton.addEventListener('click', (e) => {
      deleteTodo(toDo.id)
      // re-render the UI so the item is gone
      render()
    })

    // append the button to the list item
    listItem.appendChild(deleteButton)

    // append the list item to the list of todos
    toDoList.appendChild(listItem)
  })
}

addToDoForm.addEventListener('submit', function(e) {
  event.preventDefault()

  // create a new todo
  createToDo(newToDoText.value)

  // wipe the input value
  newToDoText.value = ''

  // re-render the UI
  render()
})

render()
