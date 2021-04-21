describe('My first Test', function() {

    it('Test case-1' , function() {

        browser.get('https://angularjs.org');
        browser.sleep(5000).then(function() {
            console.log('Last executed step'); 

        });
       

    });

});