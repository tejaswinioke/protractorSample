var login_po = require('../modules/login/login_page.js');
var show_employee =  require('../modules/showemployees/show_employee_page.js');
var employee = require('../modules/showemployees/employee.js');


describe("Test the Login scenarios",function(){
	var validName, validPass;
	
	beforeEach(function() {
		//browser.wait(function() {
		  //return browser.executeScript('return !!window.angular');
		//}, 5000);
		validName = "Luke";
		validPass = "Skywalker";
		browser.get("http://cafetownsend-angular-rails.herokuapp.com/login");
		
	});
	
	describe("check with invalid username and password",function() {
		
		var invalidName, invalidPass;
		
		beforeEach(function() {
			invalidName = "teju";
			invalidPass = "teju";
		});		
		
		it("enter invalid username and valid password and click login", function() {
			login_po.enterName(invalidName);
			login_po.enterPassword(validPass);
		});
		
		it("enter valid username and invalid password and click login", function() {
			login_po.enterName(validName);
			login_po.enterPassword(invalidPass);
		});
		
		it("enter invalid username and invalid password and click login", function() {
			login_po.enterName(invalidName);
			login_po.enterPassword(invalidPass);
		});
		
		
		afterEach(function(){
			login_po.clickLogin();
			var message = element(by.xpath(".//*[@id='login-form']/fieldset/p[1]")).getText();
			message.then(function(message){
				//console.log(message);	
				expect(message).toContain("Invalid username or password!");
			});
		});
	});
	
	it("Test successful Login and logout",function() {
		login_po.enterName(validName);
		login_po.enterPassword(validPass);
		login_po.clickLogin();
		expect(show_employee.getGreetings()).toBe("Hello Luke");
		show_employee.clickLogout();
		expect(login_po.username.isDisplayed()).toBeTruthy();
	});
	
	
	
});