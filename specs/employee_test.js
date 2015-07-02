var login_po = require('../modules/login/login_page.js');
var show_employee =  require('../modules/showemployees/show_employee_page.js');
var employee = require('../modules/showemployees/employee.js');


describe("Test Employee create ,delete and edit",function () {
		
		beforeEach(function() {
			browser.get("http://cafetownsend-angular-rails.herokuapp.com/login");
			login_po.enterName("Luke");
			login_po.enterPassword("Skywalker");
			login_po.clickLogin();
			expect(show_employee.getGreetings()).toBe("Hello Luke");
		});
		
		
	
		
		
		it("Test successful create employee",function() {
			show_employee.clickCreateEmployee();
			employee.enterFirstName("Teju");
			employee.enterLastName("Teju");
			employee.enterEmail("Teju@eee.cc");
			employee.enterStartDate("2012-10-10");
			show_employee = employee.clickAdd();
			// verify employee added
			//var rows = show_employee.getListOfEmployees();
			
			
			var rows = element.all(by.repeater('employee in employees')).get(0);
			console.log(rows);
		});
		
		afterEach(function() {
			show_employee.clickLogout();
			expect(login_po.username.isDisplayed()).toBeTruthy();
		});
		
		
		
		
	});