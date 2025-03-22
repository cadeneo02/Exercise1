// Function that initializes the page
function main() {
    // Gets references to HTML elements needed for the function (output, submit, input)
    let outputElement = document.getElementById("output");
    let submitButton = document.getElementById("submit-button");
    let inputField = document.querySelector("input");

    // This adds event listener to submit button
    submitButton.addEventListener("click", () => handleUserInput(inputField, outputElement));

    // Add event listener/log for input keypress detection
    inputField.addEventListener("keypress", function(event) {
        console.log(`Key pressed: ${event.key}`);
    });
}

// Function that processes user input
function handleUserInput(inputField, outputElement) {
    // Passes input and DOM elements to the createHTML function
    createHTML(inputField.value.trim(), outputElement, inputField);
}

// Function to create and add new HTML, dynamic HTML elements
function createHTML(inputValue, outputElement, inputField) {
    // Validates inputs, send message if there is none
    if (inputValue === "") {
        console.log("No Input :("); // Log empty input
        return; // Exit createHTML if input is empty
    }

    // Creates a new paragraph in the page, "p"
    let feedbackMessage = document.createElement("p");

    // Inserts user input into the new paragraph
    feedbackMessage.textContent = "Feedback: " + inputValue;

    // Styling for this new feedback paragraph
    feedbackMessage.style.color = "#25AD1A"; // Green, standout color
    feedbackMessage.style.fontWeight = "bold";
    feedbackMessage.style.textAlign = "center";
    feedbackMessage.style.marginTop = "10px";

    // Add new paragraph to output section
    outputElement.appendChild(feedbackMessage);

    // After submit is clicked, clear the input section
    inputField.value = "";
}

// Runs function
window.onload = main;