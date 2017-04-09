describe('End to end test', function () {
    it('App opened successfully', function () {
        browser.get('http://localhost/angular-seed/app/view1/view2.html');
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
        expect(labelPageName1.getText()).toEqual('1.92');
        expect(labelPageName2.getText()).toEqual('x2: не має дісних коренів');
    });
});
