describe('Switch to DEMO', function () {


    it('Alerts Demo', () => {
        browser.driver.navigate().to('http://formy-project.herokuapp.com/switch-window');
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        element(by.id('alert-button')).click();
        
        browser.switchTo().alert().getText().then(function (text) {
            browser.sleep(2000);
            console.log(text);
        });
        browser.switchTo().alert().accept();
    });
    
    it('Mulit-Window Demo', () => {
        browser.driver.navigate().to('https://www.irctc.co.in/eticketing/error.html#');
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        element(by.linkText('Contact Us')).click();

        browser.getAllWindowHandles().then(function(windowIDs){
            console.log(windowIDs[0] + "---" + windowIDs[1]);
            browser.driver.switchTo().window(windowIDs[1]);
            element.all(by.tagName('a')).each(function(link){
                link.getText().then(function(text){
                    console.log("ChildWindlow " + text);
                })
            });
            browser.driver.close();
            browser.driver.switchTo().window(windowIDs[0]);
            element.all(by.tagName('a')).each(function(link){
                link.getText().then(function(text){
                    console.log("ParentWindow " + text);
                })
            });

        })
    });
    
    it('Handling Frames in Protractor ', () => {
        browser.driver.navigate().to('https://www.irctc.co.in/eticketing/error.html#');
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('https://jqueryui.com/droppable/');
        // switch to frame element
        browser.switchTo().frame(element(by.xpath("//iframe[contains(@src,'default')]")).getWebElement());

        browser.actions().
            dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).
            perform().then(function() {
                element(by.id('draggable')).getText().then(function(text)
                {
                    console.log("Draggable Text : " + text);
                });
                element(by.id('droppable')).getText().then(function(text2)
                {
                    console.log("droppable Text : " + text2);
                });
            });
    });
});

