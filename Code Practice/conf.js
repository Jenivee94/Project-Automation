// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
      // 'spec.js',
      'myaccount_spec.js'
      // 'Checklist_spec.js'
    ],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
    }
  }