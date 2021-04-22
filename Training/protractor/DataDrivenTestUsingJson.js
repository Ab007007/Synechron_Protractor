var datafileObj = require('../protractor/data/Object.json')
describe('Simple Calculator ', function () {
   

    beforeEach(() => {
        browser.get(datafileObj.url);
        browser.driver.manage().window().maximize();
        element(by.model(datafileObj.locators.homepage.firstnum)).
        sendKeys(datafileObj.userinputs.firstNum);
    });
    afterEach(() => {
        browser.sleep(3000);
    });
    it('Addition Of Numbers', function () {

        element(by.model(datafileObj.locators.homepage.secondnum)).sendKeys(datafileObj.userinputs.secondNum);
        element(by.buttonText(datafileObj.locators.homepage.gobutton)).click();

        element(by.binding(datafileObj.locators.homepage.result)).getText().then(function (result) 
        {
            console.log("Summ of two numbers is " + result);

        });


    });

    
    it('Substraction Of Numbers - Using Chain locators', function () {

        element(by.model(datafileObj.locators.homepage.operator)).element(by.css(datafileObj.locators.homepage.minus)).click();
        element(by.model(datafileObj.locators.homepage.secondnum)).sendKeys(datafileObj.userinputs.secondNum);
        element(by.buttonText(datafileObj.locators.homepage.gobutton)).click();

        element(by.binding(datafileObj.locators.homepage.result)).getText().then(function (result) 
        {
            console.log("Sub of two numbers is " + result);

        });

    });


}); 