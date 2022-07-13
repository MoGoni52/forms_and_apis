function addListItem(text) {
    
    // Get a reference to the container
    const container = document.getElementById("container");

    // Create a li element
    const newElement = document.createElement("li");

    // Add the text to it
    newElement.textContent = text;

    // Actually addd the element to the page
    container.appendChild(newElement);

}

// Listen to the button and wait for click
document.getElementById("first-button").addEventListener("click", (e) => {

   // Get the textbox's value
   const text = document.querySelector("#input-box").value;

    addListItem(text);

})
