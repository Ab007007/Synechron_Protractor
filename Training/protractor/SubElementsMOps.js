describe('Simple Calculator ', function () {
    let num1 = 5, num2 = 5;


    function mathOperation(num1, num2, operator) {
        element(by.model('first')).sendKeys(num1);
        element(by.model('operator')).all(by.tagName('option')).each(function(option){
                option.getText().then(function(operatorTxt){
                    console.log("Option " + operatorTxt);
                    if(operator === operatorTxt)
                    {
                             option.click();
                    }
                    
                })
            })
        element(by.model('second')).sendKeys(num2);
        element(by.buttonText('Go!')).click();
    }

    it('Addition Of Numbers', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        mathOperation(num1, num2, '+');

        element(by.binding('latest')).getText().then(function (result) {
            console.log("Summ of two numbers is " + result);
            expect(+result).toEqual(10);
        });


    });


    it('Substraction Of Numbers', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        mathOperation(num1, num2, '-');

        element(by.binding('latest')).getText().then(function (result) {
            console.log("Sub of two numbers is " + result);
            expect(+result).toEqual(0);
        });

    });


    it('Multiplication  Of Numbers', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        mathOperation(num1, num2, '*');
        element(by.binding('latest')).getText().then(function (result) {
            console.log("Sub of two numbers is " + result);
            expect(+result).toEqual(25);
        });

    });


    it('Division Of Numbers', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        mathOperation(num1, num2, '/');
        element(by.binding('latest')).getText().then(function (result) {
            console.log("Sub of two numbers is " + result);
            expect(+result).toEqual(1);
        });

    });

}); 
