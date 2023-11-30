const appID = "app";
const headingText = "To do. To done. ✅";

let appContainer = document.getElementById(appID);
let toDoArray = [];
let removedToDo = [];

let toDoForm = document.getElementById("form-todo");
let toDoList = document.getElementById("todo-list");
let toDoInput = document.getElementById("name-input-1");

toDoForm.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  toDoArray.push({ text: toDoInput.value, completed: false });
  toDoForm.reset();
  renderData();
}

function renderData() {
  toDoList.innerHTML = "";

  // Create an unordered list
  let todoListUl = document.createElement("ul");

  for (let i = 0; i < toDoArray.length; i++) {
    let listItemContainer = document.createElement("li");
    listItemContainer.classList.add("todo-container");

    let tempListItem = document.createElement("span");
    tempListItem.textContent = toDoArray[i].text;

    let tempButton = document.createElement("button");
    tempButton.textContent = "Finished";
    tempButton.dataset.super = i.toString();

    tempListItem.classList.add("individual-list-item");
    tempButton.classList.add("list-item-button");

    tempButton.addEventListener("click", function (event) {
      let completedIndex = parseInt(event.target.dataset.super, 10);
      toDoArray[completedIndex].completed = true;
      removedToDo.push(toDoArray[completedIndex]);
      toDoArray.splice(completedIndex, 1);
      renderData();
      renderRemovedToDo();
    });

    listItemContainer.appendChild(tempListItem);
    listItemContainer.appendChild(tempButton);

    todoListUl.appendChild(listItemContainer);
  }

  // Append the unordered list to the todoList
  toDoList.appendChild(todoListUl);
}

function renderRemovedToDo() {
  let completedList = document.getElementById("completed-items");
  completedList.innerHTML = "<ul>"; // Start an unordered list

  for (let index = 0; index < removedToDo.length; index++) {
    let tempListItem = document.createElement("li");
    tempListItem.textContent = removedToDo[index].text;
    tempListItem.classList.add("custom-list-item");
    completedList.appendChild(tempListItem);
  }

  completedList.innerHTML += "</ul>"; // End the unordered list
}

/*
function renderRemovedToDo() {
  let completedList = document.getElementById("completed-items");
  completedList.innerHTML = "";

  for (let index = 0; index < removedToDo.length; index++) {
    let listItemContainer = document.createElement("div");
    listItemContainer.classList.add("list-item-container");

    let tempListItem = document.createElement("div");
    tempListItem.textContent = removedToDo[index].text;
    tempListItem.classList.add("custom-list-item");

    listItemContainer.appendChild(tempListItem);
    completedList.appendChild(listItemContainer);
  }
} */

// DOM Element for the Clear All button
let clearAllButton = document.getElementById("clear-all-button");

// Handle the click event for the Clear All button
clearAllButton.addEventListener("click", function () {
  // Clear the entire todo array
  toDoArray = [];

  // Re-render the list to reflect the changes
  renderData();
});

function inititialise() {
  if (!appContainer) {
    console.error("Error: Could not find app container");
    return;
  }

  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  console.log("App successfully initialised");
}

inititialise();

/*
const appID = "app";
const headingText = "To do. To done. ✅";

let appContainer = document.getElementById(appID);
let toDoArray = [];
let removedToDo = [];

let toDoForm = document.getElementById("form-todo");
let toDoList = document.getElementById("todo-list");
let toDoInput = document.getElementById("name-input-1");

toDoForm.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  toDoArray.push({ text: toDoInput.value, completed: false });
  toDoForm.reset();
  renderData();
}

function renderData() {
  toDoList.innerHTML = "";

  for (let i = 0; i < toDoArray.length; i++) {
    let listItemContainer = document.createElement("div");
    listItemContainer.classList.add("todo-container");

    let tempListItem = document.createElement("div");
    tempListItem.textContent = toDoArray[i].text;

    let tempButton = document.createElement("button");
    tempButton.textContent = "Finished";
    tempButton.dataset.super = i.toString();

    tempListItem.classList.add("individual-list-item");
    tempButton.classList.add("list-item-button");

    tempButton.addEventListener("click", function (event) {
      let completedIndex = parseInt(event.target.dataset.super, 10);
      toDoArray[completedIndex].completed = true;
      removedToDo.push(toDoArray[completedIndex]);
      toDoArray.splice(completedIndex, 1);
      renderData();
      renderRemovedToDo();
    });

    listItemContainer.appendChild(tempListItem);
    listItemContainer.appendChild(tempButton);
    toDoList.appendChild(listItemContainer);
  }
}

function renderRemovedToDo() {
  let completedList = document.getElementById("completed-items");
  completedList.innerHTML = "";

  for (let index = 0; index < removedToDo.length; index++) {
    let listItemContainer = document.createElement("div");
    listItemContainer.classList.add("list-item-container");

    let tempListItem = document.createElement("div");
    tempListItem.textContent = removedToDo[index].text;
    tempListItem.classList.add("custom-list-item");

    listItemContainer.appendChild(tempListItem);
    completedList.appendChild(listItemContainer);
  }
}

function inititialise() {
  if (!appContainer) {
    console.error("Error: Could not find app container");
    return;
  }

  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  console.log("App successfully initialised");
}

inititialise();
*/
