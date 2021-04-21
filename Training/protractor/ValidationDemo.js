describe('Simple Calculator ', function () {

    it('Addition Of Numbers', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(5);
        element(by.buttonText('Go!')).click();

        element(by.css("h2[class='ng-binding']")).getText().then(function (result) {
            console.log("Summ of two numbers is " + result);

            expect(+result).toEqual(10);

        });


        //  finding element using binding method
        // element(by.binding('latest')).getText().then(function (result) 
        // {
        //     console.log("Summ of two numbers is " + result);

        // });


    });

}); 