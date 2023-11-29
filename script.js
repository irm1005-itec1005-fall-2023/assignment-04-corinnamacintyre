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


// Functions
// // Create our variables
let toDoArray = [];
let toDoForm = document.getElementById("form-todo");
let toDoList = document.getElementById("todo-list");
let toDoInput = document.getElementById("name-input-1");

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

  // Clear the list
  toDoList.innerHTML = "";

  for (let i=0; i < toDoArray.length ; i++ ){
    let tempListItem = document.createElement("div");

    let tempListItem = document.createElement("li");

    tempListItem.textContent = toDoArray[i].text;

    tempListItem.textContent = toDoArray[i];

    let tempButton = document.createElement("button");

    tempButton.textContent = "Finished";

    tempButton.dataset.todo = i;

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

// Render the data to the page
function renderData() {

  console.log("Render Data", toDoArray);

  // Clear the list
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

// Call renderlist for the first time

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