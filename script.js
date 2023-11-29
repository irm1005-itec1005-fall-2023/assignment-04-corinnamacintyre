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


/*const appID = "app";
const headingText = "To do. To done. ✅";

let appContainer = document.getElementById(appID);
let toDoArray = [];
let counter = 0;

let toDoForm = document.getElementById("form-todo");
let toDoList = document.getElementById("todo-list");
let toDoInput = document.getElementById("name-input-1");
let removedToDo = [];

toDoForm.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  toDoArray.push(toDoInput.value);
  toDoForm.reset();
  renderData();
}

function renderData() {
  toDoList.innerHTML = "";

  for (let i = 0; i < toDoArray.length; i++) {
    let listItemContainer = document.createElement("div");
    listItemContainer.classList.add("todo-container");

    let tempListItem = document.createElement("li");
    tempListItem.textContent = toDoArray[i];

    let tempButton = document.createElement("button");
    tempButton.textContent = "Finished";
    tempButton.dataset.super = i.toString();

    tempListItem.classList.add("individual-list-item");
    tempButton.classList.add("list-item-button");

    tempButton.addEventListener("click", function (event) {
      let deletedItem = parseInt(event.target.dataset.super, 10);
      removedToDo.push(toDoArray[deletedItem]);
      toDoArray.splice(deletedItem, 1);
      renderData();
      renderRemovedToDo();
    });

    listItemContainer.appendChild(tempListItem);
    listItemContainer.appendChild(tempButton);
    toDoList.appendChild(listItemContainer);
  }
}

function renderRemovedToDo() {
  let removedToDoList = document.getElementById("completed-list");
  removedToDoList.innerHTML = "";

  for (let index = 0; index < removedToDo.length; index++) {
    let listItemContainer = document.createElement("div");
    listItemContainer.classList.add("list-item-container");

    let tempListItem = document.createElement("li");
    tempListItem.textContent = removedToDo[index].text;
    tempListItem.classList.add("custom-list-item");

    listItemContainer.appendChild(tempListItem);
    removedToDoList.appendChild(listItemContainer);
  }
}

let completedList = document.getElementById("completed-items");

function renderData() {
  toDoList.innerHTML = "";
  completedList.innerHTML = "";

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
    });

    listItemContainer.appendChild(tempListItem);
    listItemContainer.appendChild(tempButton);

    if (toDoArray[i].completed) {
      completedList.appendChild(tempListItem);
    } else {
      toDoList.appendChild(listItemContainer);
    }
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
