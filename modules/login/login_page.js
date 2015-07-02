

var login_page = function () {
	
	this.username = element(by.model("user.name"));
	
	this.password = element(by.model("user.password"));
	
	this.enterName = function(name) {
		//if(this.username.isDisplayed())
		this.username.sendKeys(name);
	}
	
	this.enterPassword = function(pass) {
		this.password.sendKeys(pass);
	}
	
	this.clickLogin = function() {
		element(by.buttonText("Login")).click();
		
	}
	
};

module.exports = new login_page();