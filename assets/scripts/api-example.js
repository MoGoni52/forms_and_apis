const url = "https://zoo-animal-api.herokuapp.com/animals/rand"

function displayAnimal (data) {

// Get a reference to the parent div
const display = document.getElementById("display");

// Put the animal's name to the div
display.innerHTML = `<h2>${data["name"]} (<em>${data["latin_name"]}</em>)</h2>`

}

// Make a request for the data using fetch
fetch(url) // returns a promise
    .then((response) => response.json()) // returns another promise
    .then((data) => displayAnimal(data))
