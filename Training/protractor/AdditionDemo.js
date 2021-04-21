describe('Simple Calculator ', function() {

    it('Addition Of Numbers' , function() {

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(5);
        element(by.buttonText('Go!')).click().then(function(){
            browser.sleep(5000);
        });

    });

});