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

//
// Functions
// // Create our variables
let superHeroArray = [];
let superHeroForm = document.getElementById("form-superhero");
let superHeroList = document.getElementById("superhero-name-list");
let superHeroInput = document.getElementById("name-input-1");

// Handle Submit Form
superHeroForm.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {

  // Prevent the default behavior of the form`
  event.preventDefault();

  // Grab the value from the input
  //console.log("Name of Superhero: ", superHeroInput.value);

  // This is what you do in add to do app
  // addTodoItem(superHeroInput.value);

  superHeroArray.push(superHeroInput.value);

  // Clear the input
  // superHeroInput.value = "";
  superHeroForm.reset();

  // Draw the list
  renderData();
}
// Render the data to the page
function renderData() {

  console.log("Render Data", superHeroArray);

  // Clear the list
  superHeroList.innerHTML = "";

  for (let i=0; i < superHeroArray.length ; i++ ){
    let tempListItem = document.createElement("li");

    tempListItem.textContent = superHeroArray[i];

    let tempButton = document.createElement("button");

    tempButton.textContent = "Click me";

    tempButton.dataset.super = i;

    // You can actually add an event handler here
    tempButton.addEventListener("click", function(event){
      console.log("You clicked me");

      console.log("You clicked on", event.target.dataset.super);

      // Remove this item from the array
      superHeroArray.splice(event.target.dataset.super, 1);

      // Re-render the list
      renderData();

      console.log(typeCount[i].type + " - " + typeCount[i].count)

    });

    tempListItem.appendChild(tempButton);

    superHeroList.appendChild(tempListItem);

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