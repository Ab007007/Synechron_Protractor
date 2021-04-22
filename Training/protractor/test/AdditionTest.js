let homepage = require('../page/CalculatorHomePage')
describe('Simple Calculator ', function() {

    it('Addition Of Numbers' , function() {

        browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNum(200);
        homepage.clickMinus();
        homepage.enterSecNum(100);
        homepage.clickOnGo();
       
        browser.sleep(5000);

    });

});