describe('Simple Calculator ', function () {


    it('should behave...', () => {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.driver.navigate().
        to('http://www.google.com');
        browser.driver.navigate().back();
        browser.driver.navigate().forward();
        browser.driver.getCurrentUrl().then(function(url){
            console.log("Current url of the page " + url);
        });        
    });
   
});

