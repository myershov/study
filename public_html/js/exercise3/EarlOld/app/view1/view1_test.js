describe('End to end test', function () {

	it('App opened successfully', function () {
        browser.get('http://localhost:8000/angular-seed/app/view1/view2.html');
        expect(browser.getTitle()).toEqual('My AngularJS App');
    });


    it('Test 1', function () {
       
        element(by.id('a')).sendKeys('1');
        element(by.id('b')).sendKeys('2');
        element(by.id('c')).sendKeys('1');
        element(by.id('button')).click();
        var labelPageName = element(by.id('res1'));
        var labelPageName1 = element(by.id('res2'));
        expect(labelPageName.getText()).toEqual('кне дійсне число');
        expect(labelPageName1.getText()).toEqual('конь не дійсне число');

    });
});