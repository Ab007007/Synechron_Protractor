// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['example_spec.js'],
  suites:
  {
    smoke : ['ActionsDemo.js', 'MathematicalOperations.js'],
    regression : ['DataDrivenTestUsingJson.js', 'printAllRows.js', 'ExplicitWaitDemo.js'],
    adhoc : ['ResolvePromiseDemo.js', 'BrowserOperations.js']
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
