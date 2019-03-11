/*
function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("hi, my name is " + this.name + " and my favorite color is " + this.favoriteColor);
	}
}
*/
class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}

	greet() {
		console.log("Naber, my name is " + this.name + " and my favorite color is " + this.favoriteColor);
	}
}


//module.exports = Person;
export default Person;