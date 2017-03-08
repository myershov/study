describe('End to end test', function () {
    it('App opened successfully', function () {
        browser.get('http://localhost:8383/angular-seed/index.html#!/view2');
        expect(browser.getTitle()).toEqual('My AngularJS App');
    });

    it('Test data 1', function () {
        var labelPageName;
        element(by.id('txt')).sendKeys('1');
        element(by.id('txt1')).sendKeys('2');
        element(by.id('txt2')).sendKeys('1');
        element(by.id('button')).click();
        labelPageName = element(by.id('res1'));
        expect(labelPageName.getText()).toEqual('x1: -1.00');
    });
    it('Test data 2', function () {
        var labelPageName;
        element(by.id('txt')).sendKeys('1');
        element(by.id('txt1')).sendKeys('2');
        element(by.id('txt2')).sendKeys('2');
        element(by.id('button')).click();
        labelPageName = element(by.id('res1'));
        expect(labelPageName.getText()).toEqual('x1: немає дійсних розвязків');
    });
    it('Test data 3', function () {
        var labelPageName1, 
            labelPageName2;
        element(by.id('txt')).sendKeys('2');
        element(by.id('txt1')).sendKeys('5');
        element(by.id('txt2')).sendKeys('2');
        element(by.id('button')).click();
        labelPageName1 = element(by.id('res1'));
        labelPageName2 = element(by.id('res2'));
        expect(labelPageName1.getText()).toEqual('x1: -0.50');
        expect(labelPageName2.getText()).toEqual('x2: -2.00');
    });
    it('Test data 4', function () {
        var labelPageName1, 
            labelPageName2;
        element(by.id('txt')).sendKeys('55');
        element(by.id('txt1')).sendKeys('22');
        element(by.id('txt2')).sendKeys('1');
        element(by.id('button')).click();
        labelPageName1 = element(by.id('res1'));
        labelPageName2 = element(by.id('res2'));
        expect(labelPageName1.getText()).toEqual('x1: -0.05');
        expect(labelPageName2.getText()).toEqual('x2: -0.35');
    });
});
