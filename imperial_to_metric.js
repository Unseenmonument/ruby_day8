function
	convertInchesToCentimeters(height){heightCentimeters = height * 2.54;

	return heightCentimeters

}

var myName = prompt("What is your name?")

var heightInches = prompt("How tall are you?");
var weightPounds = prompt("How much do you weight?");
var heightCentimeters = heightInches * 2.54;
var weightKilograms = weightPounds * .0453592;

alert(myName + " is " + convertInchesToCentimeters(heightInches) + " cm and " + weightKilograms + " kg.");