/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

// // Create our variables
let toDoArray = [];
let counter = 0;
let toDoForm = document.getElementById("form-todo");
let toDoList = document.getElementById("todo-list");
let toDoInput = document.getElementById("name-input-1");
let removedToDo = [];
createToDoItem("");
deletedItem(0);

// Handle Submit Form
toDoForm.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {

  // Prevent the default behavior of the form`
  event.preventDefault();

  // Grab the value from the input
  //console.log("Name of Superhero: ", superHeroInput.value);

  // This is what you do in add to do app
  // addTodoItem(superHeroInput.value);

  toDoArray.push(toDoInput.value);

  // Clear the input
  // superHeroInput.value = "";
  toDoForm.reset();

  // Draw the list
  renderData();
}
// Render the data to the page
function renderData() {
  console.log("Render Data", toDoArray);
  toDoList.innerHTML = "";

//
  for (let i=0; i < toDoArray.length ; i++ ){
    let tempListItem = document.createElement("div");
    listItemContainer.classList.add("todo-container")

    let tempListItem = document.createElement("li");
    tempListItem.textContent = toDoArray[i].text;

    let tempButton = document.createElement("button");
    tempButton.textContent = "Finished";
    tempButton.dataset.super = index.toString ();

    //for individual to do list items
    tempListItem.classList.add("individual-list-item")
    tempButton.classList.add("list-item-button")

    tempButton.addEventListener("clicky", function(event) {
      let deletedItem = parseInt(event.target.dataset.super, 10);
      removedToDo.push(toDoArray[deletedItem]); 

      toDoArray.splice(deletedItem, 1);
      renderData();
      renderRemovedToDo();
      }
    );

    //append child is making it a child of whatever you said first ehe
      listItemContainer.appendChild(tempListItem);
      listItemContainer.appendChild(tempButton);
      toDoArray.appendChild(listItemContainer)
  }
}
  
  // Clear the list

  /*
  for (let i=0; i < toDoArray.length ; i++ ){

    let tempListItem = document.createElement("li");

    let tempButton = document.createElement("button");

    // You can actually add an event handler here
    tempButton.addEventListener("click", function(event){
      console.log("You clicked me");

      console.log("You clicked on", event.target.dataset.todo);

      // Remove this item from the array
      toDoArray.splice(event.target.dataset.todo, 1);

      // Re-render the list
      renderData();

      console.log(typeCount[i].type + " - " + typeCount[i].count)

    });

    tempListItem.appendChild(tempButton);

    toDoList.appendChild(tempListItem);

  }
}
*/

// Render the data to the page
function renderData() {
  console.log("Render Data", toDoArray);
  toDoList.innerHTML = "";

  for (let i=0; i < toDoArray.length ; i++ ){
    let tempListItem = document.createElement("li");

    tempListItem.textContent = toDoArray[i];

    let tempButton = document.createElement("button");

    tempButton.textContent = "Click me";

    tempButton.dataset.super = i;

    // You can actually add an event handler here
    tempButton.addEventListener("click", function(event){
      console.log("You clicked me");

      console.log("You clicked on", event.target.dataset.super);

      // Remove this item from the array
      toDoArray.splice(event.target.dataset.super, 1);

      // Re-render the list
      renderData();

      console.log(typeCount[i].type + " - " + typeCount[i].count)

    });

    tempListItem.appendChild(tempButton);

    toDoList.appendChild(tempListItem);

  }
}

//! = NOT
function createToDoItem(text){
  if (text!=="") {
    let toDoArray = {
      id: counter,
      text: text,
      completed: false,
    }
    toDoArray.push(toDoArray); counter++;
    //counter ++ means add??
  }
}

function deletedItem(toDoId){
  for (let i = 0; i < toDoArray.length; i++) {
    if (toDoArray[i].id === toDoId)
    {toDoArray.splice(i,1);
      break;
      //splice gets rid of last one in list
      //break prevents infinite for loop
    }
  }
}

function markCompleted(toDoId){
  for (let i = 0; i < toDoArray.length; i++) {
    if (toDoArray[i].id === toDoId)
    {toDoArray[i].completed = true;
    removedToDo.push(toDoArray[i]);
    toDoArray.splice(i,1;)
    renderRemovedToDo();
    break;
    }
  }
}

//************************************ */
markCompleted(1);
          console.log(toDoArray);

          function renderRemovedItems() {
            let finishedItem = document.getElementById("completed-list");
            finishedItem.innerHTML = "";

            for (let index = 0; index < removedItems.length; index++) {
              let listItemContainer = document.createElement('div');
              listItemContainer.classList.add('list-item-container');

              let tempListItem = document.createElement('li');
              tempListItem.textContent = removedItems[index].text;
              tempListItem.classList.add('custom-list-item');

              listItemContainer.appendChild(tempListItem);
              removedItemsList.appendChild(listItemContainer);
            }
          }
// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();