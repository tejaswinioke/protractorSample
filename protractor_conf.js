// An example configuration file.


  

exports.config = {
	// Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',
  
  
	onPrepare: function() {
    
    var jasmineReporters = require('C:/Users/vishram oak/npm-global/node_modules/jasmine-reporters');
	jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
		consolidateAll: true,
		filePrefix: 'xmloutput',
		savePath: 'testresults'
	}));
		
	  
	
    
  },
  
  
  
  multiCapabilities: [
	{
	  'browserName' : 'chrome'
	},
	
  ],

  
seleniumAddress: 'http://localhost:4444/wd/hub',
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['./specs/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
	showColors:true,
	isVerbose:true,
	inludeStackTrace:true
  }
};
