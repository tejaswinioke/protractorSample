var employee = function() {
	
	this.firstName = element(by.model("selectedEmployee.firstName"));
	this.lastName = element(by.model("selectedEmployee.lastName"));
	this.startDate = element(by.model("selectedEmployee.startDate"));
	this.email = element(by.model("selectedEmployee.email"));
	this.addButton = element(by.buttonText("Add"));
	
	this.enterFirstName = function(name) {
		this.firstName.sendKeys(name);
	}
	
	this.enterLastName = function(lname) {
		this.lastName.sendKeys(lname);
	}
	
	this.enterStartDate = function(date) {
		this.startDate.sendKeys(date);
	}
	
	this.enterEmail = function(email) {
		this.email.sendKeys(email);
	}
	
	this.clickAdd = function() {
		this.addButton.click();
		return require('../showemployees/show_employee_page.js');
	}
	
};

module.exports = new employee();