module.exports = function(config) { 
    config.set({
         frameworks: ['jasmine'], 
        browsers: ['Chrome'],  
        files: [ 
            'app/view1/view1_test.js'
         ]
     }); };