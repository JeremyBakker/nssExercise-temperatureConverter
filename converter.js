
//Set Variables Targeting Interactive Elements
var tempInput = document.getElementById("tempField");
var fahrRadio = document.getElementById("fahr");
var celsRadio = document.getElementById("cels");
var convertTempButton = document.getElementById("tempButton");
var clearButton = document.getElementById("clearButton");
var answerField = document.getElementById("tempField");


// Temperature Conversion Function
var submit = function() {
	console.log("Submit");

	// Grab the input value
	var temperature = answerField.value;
	console.log(temperature);

	//Determine whether the text box is empty
	if (tempInput.value === "") {
		console.log("Empty input");
		alert("Please enter a temperature.")
	}

	//Determine whether the text box has a number
	else if (isNaN(answerField.value)) {
		console.log("Invalid Number")
		alert("Please enter a valid number.");
		tempInput.value = ""; //Clear invalid input
	}

	//Determine whether a radio button has been selected
	else if (fahrRadio.checked === false && celsRadio.checked === false) {
		console.log("Unchecked");
		alert("Please select a temperature scale.")
	}

	// Determine which radio button is selected and whether the temperature exceeds 90 degrees Fahrenheit
	else if (fahrRadio.checked && tempInput.value > 90) {
		// Convert Fahrenheit to Celsius
		temperature = (temperature - 32) * (5/9);
		// Display the converted temperature in the HTML document
		answer.innerHTML = answerField.value + " degrees Fahrenheit is approximately " + "<span style='color:red'>" + Math.round(temperature) + "</span>" + " degrees Celsius.";
	}

	// Determine which radio button is selected and whether the temperature falls below 32 degrees Fahrenheit
	else if (fahrRadio.checked && tempInput.value < 32) {
		// Convert Fahrenheit to Celsius
		temperature = (temperature - 32) * (5/9);
		// Display the converted temperature in the HTML document
		answer.innerHTML = answerField.value + " degrees Fahrenheit is approximately " + "<span style='color:blue'>" + Math.round(temperature) + "</span>" + " degrees Celsius.";
	}

	// Determine which radio button is selected 
	else if (fahrRadio.checked) {
		// Convert Fahrenheit to Celsius
		temperature = (temperature - 32) * (5/9);
		// Display the converted temperature in the HTML document
		answer.innerHTML = answerField.value + " degrees Fahrenheit is approximately " + "<span style='color:green'>" + Math.round(temperature) + "</span>" + " degrees Celsius.";
	}

	// Determine which radio button is selected and whether the temperature exceeds 32 degrees Celsius
	else if (celsRadio.checked && tempInput.value > 32) {
		// Convert Celsius to Fahrenheit
		temperature = (temperature * 9/5) + 32;
		// Display the converted temperature in red in the HTML document
		answer.innerHTML = answerField.value + " degrees Fahrenheit is approximately " + "<span style='color:red'>" + Math.round(temperature) + "</span>" + " degrees Celsius.";
	}

	// Determine which radio button is selected and whether the temperature falls below 0 degrees Celsius
	else if (celsRadio.checked && tempInput.value < 0) {
		// Convert Celsius to Fahrenheit
		temperature = (temperature * 9/5) + 32;
		// Display the converted temperature in the HTML document
		answer.innerHTML = answerField.value + " degrees Fahrenheit is approximately " + "<span style='color:blue'>" + Math.round(temperature) + "</span>" + " degrees Celsius.";
	}

	else {
		// Convert Celsius to Fahrenheit
		temperature = (temperature * 9/5) + 32;
		// Display the converted temperature in the HTML document	
		answer.innerHTML = answerField.value + " degrees Celsius is approximately " + "<span style='color:green'>" + Math.round(temperature) + "</span>" + " degrees Celsius.";
	}	
}

// Clear Input Values
var clear = function() {
	console.log("Clear");
	tempInput.value = "";
	fahrRadio.checked = false;
	celsRadio.checked = false;
	answer.innerHTML = "";
}

// Log Fahrenheit Selection in the Console
var fahr = function() {
	console.log("Fahrenheit");
}

// Log Celsius Selection in the Console
var cels = function() {
	console.log("Celsius");
}

// Convert Button Event Handler
convertTempButton.onclick = submit;

// Clear Button Event Handler
clearButton.onclick = clear;

// Radio Buttons Event Handlers
fahrRadio.onclick = fahr;
celsRadio.onclick = cels;


