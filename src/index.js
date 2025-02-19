console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector("#launchButton");
const confirmButton = document.querySelector("#confirmButton");
const cancelButton = document.querySelector("#cancelButton");

// B- MESSAGES
// Getting the success h1 and failure h1 from the DOM
const successMessage = document.querySelector("h1.success");
const failureMessage = document.querySelector("h1.failure");

// C- MODAL
const modal = document.querySelector("div.modal");


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html FINISHED!
//  B- The DOM's element.onclick attribute
launchButton.onclick = function(event) {
  console.log("Huh, what happened to the other guy??");
}
//  C- element.addEventListener('click', callback)
launchButton.addEventListener('click', function(event) {
  console.log("We can add ALL THE EVENTS!!!");
  console.log(`
    event type: ${event.type}
    event target: ${event.target.nodeName}
  `);
})
// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launch() {
  modal.classList.remove("off");
  failureMessage.classList.add("off");
  successMessage.classList.add("off");
}
launchButton.addEventListener('click', launch);

/**
 * TWO WAYS TO WRITE A FUNCTION IN JAVASCRIPT!!!
 * 1.) function declaration => hoisted
 * 2.) function expression  => stays put
 */

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirm() {
  modal.classList.add("off");
  successMessage.classList.remove("off");
}
confirmButton.addEventListener("click", confirm);

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel() {
  modal.classList.add("off");
  failureMessage.classList.remove("off");
}
cancelButton.addEventListener("click", cancel);

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
function escKey(event) {
  console.log(event.key);
  if (event.key === "Escape") {
    modal.classList.add("off");
  }
}
document.addEventListener("keydown", escKey);

document.addEventListener("click", function(evt) {
  if (evt.target === launchButton) {
    console.log("LEEEEEEEEET'S GO!!!!!");
  } else {
    // console.log("I hate humans so much!");
  }
})

Array.from(document.links).forEach(link => {
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(`The ${evt.target.textContent} link is a crypto SCAM!!!`)
  })
})

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
document.querySelectorAll("*").forEach(elem => elem.addEventListener("click", evt => {
  console.log(`🎯 target:        ${evt.target}`);
  console.log(`🧭 currentTarget: ${evt.currentTarget}`);
}))

modal.addEventListener("click", event => {
  console.log("YOU SHALL NOT PASS!");
  event.stopPropagation();
})

// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
