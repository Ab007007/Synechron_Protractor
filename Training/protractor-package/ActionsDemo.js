describe('Simple Calculator ', function () {

    it('Mouse Movement Operations using Actions', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.flipkart.com/').then(function () {

            var expCond = protractor.ExpectedConditions;
            browser.wait(expCond.elementToBeClickable(
                element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
            element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();
            browser.actions().
                mouseMove(element(by.xpath("//div[text()='Electronics']"))).perform();
            browser.actions().
                mouseMove(element(by.xpath("//div[text()='Home']"))).perform();
            browser.actions().
                mouseMove(element(by.xpath("//div[text()='Appliances']"))).perform();
            browser.actions().
                mouseMove(element(by.xpath("//div[text()='Beauty, Toys & More']"))).perform();

        });

    });

});

