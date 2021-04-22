var datafileObj = require('../protractor/data/Object.json')
var using = require('jasmine-data-provider');

describe('Simple Calculator ', function () {
   

    beforeEach(() => {
        browser.get(datafileObj.url);
        browser.driver.manage().window().maximize();
        
    });
    afterEach(() => {
        browser.sleep(3000);
    });
   
    using([{num1 : datafileObj.userinputs.firstNum, num2 : datafileObj.userinputs.secondNum},
            {num1 : datafileObj.userinputs.thirdNum, num2 : datafileObj.userinputs.fourthNum},
            {num1 : datafileObj.userinputs.thirdNum, num2 : datafileObj.userinputs.fourthNum},
            {num1 : datafileObj.userinputs.firstNum, num2 : datafileObj.userinputs.secondNum},
    ], function(data){
        it('Addition Of Numbers', function () {

            element(by.model(datafileObj.locators.homepage.firstnum)).sendKeys(data.num1);
            element(by.model(datafileObj.locators.homepage.secondnum)).sendKeys(data.num2);
            element(by.buttonText(datafileObj.locators.homepage.gobutton)).click();
    
            element(by.binding(datafileObj.locators.homepage.result)).getText().then(function (result) 
            {
                console.log("Summ of two numbers is " + result);
    
            });
    
    
        });
    })
    
 
}); 