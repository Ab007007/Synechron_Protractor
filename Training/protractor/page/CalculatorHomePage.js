let homepage = function()  {
    
    let textBox1 = element(by.model('first'));
    let textBox2 = element(by.model('second'));
    let goButton = element(by.buttonText('Go!'));
    let operator = element(by.model('operator'));
    let plus = element(by.model('operator')).element(by.css("option[value='ADDITION']"));
    let minus = element(by.model('operator')).element(by.css("option[value='SUBTRACTION']"));
    let multi = element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']"));
    let divi = element(by.model('operator')).element(by.css("option[value='DIVISION']"));
     
    this.enterFirstNum = function(firstNum){
        textBox1.sendKeys(firstNum);
    };

    this.enterSecNum = function(secNum){
        textBox2.sendKeys(secNum);
    };

    this.clickOnGo = function () {
        goButton.click();
    }

    this.clickPlus = function() {
        plus.click();
    }
    this.clickMinus = function() {
        minus.click();
    }

};

module.exports = new homepage();