// ***Instructions***

// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.
// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.


//***Logic***
//Listen for Click on "Convert Temperature Button"
//Listen for Radio Button selection
//If both entries are valid, convert text input to integer, then to the other temperature scale
//If one or more entries are invalid, alert the user to the error
//Print converted temperature
	//If temperature is greature than 90F/32C, display the converted temperature in Red
	//If temperature is less than 32F/0C, display the converted temperature in blue.
	//Else display temperature in green.

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


