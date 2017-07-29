exports.config = {
  framework: 'jasmine',
  allScriptsTimeout: 110000,
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./e2e/todo-spec.js'],
  directConnect : true,
  capabilities: {
  'browserName': 'chrome'
}
  // specs: ['send-otp-component-spec.js']
  // specs: ['vehicleList-spec.js']
}

/* exports.config = {
 framework: 'jasmine',
 allScriptsTimeout: 110000,  
 specs: ['./e2e/todo-spec.js'],
 directConnect : true,
 capabilities: {
   'browserName': 'chrome'
 },
 baseUrl: 'http://www.protractortest.org',
 jasmineNodeOpts: {
   showColors: true,
   defaultTimeoutInterval: 30000,
   print: function() {}
 },
 // specs: ['send-otp-component-spec.js']
 // specs: ['vehicleList-spec.js']
} */