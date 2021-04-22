describe('Simple Calculator ', function () {
    let num1 = 10, num2 = 15;

    it('Addition Of Numbers', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(num1);
        element(by.model('second')).sendKeys(num2);
        element(by.buttonText('Go!')).click();

        element(by.binding('latest')).getText().then(function (result) 
        {
            console.log("Summ of two numbers is " + result);

        });


    });

    
    it('Substraction Of Numbers - Using Chain locators', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(num1);
        element(by.model('operator')).element(by.css("option[value='SUBTRACTION']")).click();
        element(by.model('second')).sendKeys(num2);
        element(by.buttonText('Go!')).click();

        element(by.binding('latest')).getText().then(function (result) 
        {
            console.log("Sub of two numbers is " + result);

        });

    });

    
    it('Multiplication  Of Numbers  - Using Chain locators', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(num1);
        element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();
        element(by.model('second')).sendKeys(num2);
        element(by.buttonText('Go!')).click();

        element(by.binding('latest')).getText().then(function (result) 
        {
            console.log("Sub of two numbers is " + result);

        });

    });

    
    it('Division Of Numbers  - Using Chain locators', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(num1);
        element(by.model('operator')).element(by.css("option[value='DIVISION']")).click();
        element(by.model('second')).sendKeys(num2);
        element(by.buttonText('Go!')).click();

        element(by.binding('latest')).getText().then(function (result) 
        {
            console.log("Sub of two numbers is " + result);
            //expect(+result).toEqual(10);
        });

    });

    it('Negative Scenario', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(num1);
        element(by.model('operator')).element(by.css("option[value='DIVISION']")).click();
        element(by.model('second')).sendKeys(num2);
        element(by.buttonText('Go!')).click();

        element(by.binding('latest')).getText().then(function (result) 
        {
            console.log("Sub of two numbers is " + result);
            expect(+result).toEqual(10);
        });

    });

}); 