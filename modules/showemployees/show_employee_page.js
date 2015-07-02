

var show_employee_page = function() {
	
	 this.clickCreateEmployee = function() {
		 element(by.id("bAdd")).click();
	 }
	
	 this.getGreetings = function() {
		return element(by.id('greetings')).getText();
	 }
	 
	 this.clickLogout = function() {
		 element(by.css(".main-button")).click();
	 }
	 
	 this.getListOfEmployees = function() {
		 return element(by.repeater('employee in employees'));
	 }
	 
	
	
};
module.exports = new show_employee_page();