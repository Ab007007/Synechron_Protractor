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

    it('Mathematical Operations', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        mathOperation(num1, num2, '+');
        mathOperation(num1, num2, '-');
        mathOperation(num1, num2, '*');

        element.all(by.repeater('result in memory')).count().then(function(total){
                console.log('Total number of Results / Rows ' + total);
                browser.sleep(3000);
        });

        
        printAllDates();
    });

}); 

function printAllDates() {
    element.all(by.repeater('result in memory')).each(
        function (row) {
            let date,inputs,result;
            row.element(by.binding('result.timestamp')).getText().then(function (dateValue) {
                console.log("Executed Date : " + dateValue);
                date = dateValue;
            });
            row.element(by.binding('result.value')).getText().then(function (resValue) {
                console.log("Executed Date : " + resValue);
                result = resValue;

            });
            console.log("---------------------------------------------");
            console.log(date + "--" + result)
            console.log("---------------------------------------------");
        });
}

// Code to print one Date OR First row date
function printFirstRowDate() {
    element.all(by.repeater('result in memory')).first().element(by.binding('result.timestamp'))
        .getText().then(function (dateValue) {
            console.log("Executed Date and Time " + dateValue);
        });
}


