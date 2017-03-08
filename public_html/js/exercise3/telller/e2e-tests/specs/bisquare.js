describe('End to end test', function () {
    it('App opened successfully', function () {
        browser.get('http://localhost:8383/angular-seed/index.html#!/view1');
        expect(browser.getTitle()).toEqual('My AngularJS App');
    });

    it('Test data 1', function () {
         var labelPageName1, 
            labelPageName2;
        element(by.id('txt')).sendKeys('1');
        element(by.id('txt1')).sendKeys('2');
        element(by.id('txt2')).sendKeys('-21');
        element(by.id('button')).click();
        labelPageName1 = element(by.id('res1'));
        labelPageName2 = element(by.id('res2'));
        expect(labelPageName1.getText()).toEqual('x1: 1.92');
        expect(labelPageName2.getText()).toEqual('x2: не має дісних коренів');
    });
    it('Test data 1', function () {
         var labelPageName1, 
            labelPageName2;
        element(by.id('txt')).sendKeys('1');
        element(by.id('txt1')).sendKeys('4');
        element(by.id('txt2')).sendKeys('2');
        element(by.id('button')).click();
        labelPageName1 = element(by.id('res1'));
        labelPageName2 = element(by.id('res2'));
        expect(labelPageName1.getText()).toEqual('x1: не має дісних коренів');
        expect(labelPageName2.getText()).toEqual('x2: не має дісних коренів');
    });
});
