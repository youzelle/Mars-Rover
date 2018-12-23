document.getElementById("form_id").addEventListener("submit", submitInput);


function submitInput(event) {
	event.preventDefault();
	let gridSize = document.getElementById("gridDimen").value;
	let location = document.getElementById("originalPos").value;
	let instructions = document.getElementById("instruction").value;
	const marsRover = new Rover(gridSize, location, instructions);
    document.getElementById("finalPosition").innerHTML = marsRover.executeInstructions();
}


