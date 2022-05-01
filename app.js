// Selectors
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");

// Event Listeners

todoButton.addEventListener("click", addTodo);

// Function

function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();

  // To do Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo__tem");
  todoDiv.appendChild(newTodo);

  // Checkmark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"> </i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  // Bin Button
  const BinButton = document.createElement("button");
  BinButton.innerHTML = '<i class="fas fa-trash"> </i>';
  BinButton.classList.add("trash-btn");
  todoDiv.appendChild(BinButton);

  //APPEND TO LIST
  todoList.appendChild(todoDiv);

  // Clear to do input value

  todoInput.value = "";
}
