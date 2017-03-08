exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 1000,
    specs: ['specs/square.js','specs/bisquare.js']
};
