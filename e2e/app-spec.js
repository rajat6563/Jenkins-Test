/**
 * Created by Gourav.Khatter on 19/07/2017.
 */

describe('End 2 end testing', function () {
    console.log("In test");
    // var darclLoginButton = browser.driver.findElement(by.id('signin-button'));
    // var emailInput = browser.driver.findElement(by.id('identifierId'));

    beforeEach(function () {
        browser.get('http://localhost:3000');
    });

    it('sgsgsgs', function () {
        browser.get('http://localhost:3000');
        element(by.id('signin-button')).click().then(
            function () {
                browser.wait(function () {
                    return true;
                }, 30000);
                console.log("After Wait");
                browser.getAllWindowHandles().then(
                    function (handles) {
                        console.log("handles", handles);
                        if (handles.length >= 2) {
                            browser.switchTo().window(handles[1]).then(
                                function () {
                                    browser.driver.findElement(by.id('identifierId')).sendKeys('gourav.khatter@m.darcl.com');
                                    element(by.css('.ZFr60d')).click();
                                    browser.controlFlow().execute(function () {
                                        console.log('sss');
                                    });
                                    browser.driver.findElement(by.css('.whsOnd')).sendKeys('9053337792');
                                });
                        }
                    });
            });
    });

    xit('sjhsjhsjh', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toBe('Super Calculator');

        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(3);
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toBe('5');

        element(by.model('operator')).click();
        element(by.cssContainingText('option','*')).click();

        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(3);
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toBe('6');

    });


    // xit('should go to login page first', function () {
    //     browser.ignoreSynchronization = true
    //     browser.driver.get('http://localhost:3000');
    //     waitForRedirect('login', 30000);
    //     expect(darclLoginButton.getText()).toContain('login with Darcl');
    // });
    //
    // xit('should try to login first', function () {
    //     waitForRedirect('login', 30000);
    //     // browser.wait(function () {
    //     //     console.log(darclLoginButton.isPresent());
    //     //     return darclLoginButton.isPresent();
    //     // });
    //
    //     // browser.wait(function () {
    //     //     console.log(darclLoginButton.isDisplayed());
    //     //     return darclLoginButton.isDisplayed();
    //     // });
    //
    //
    //     expect(darclLoginButton.getText()).toContain('Darcl');
    //
    //     darclLoginButton.click();
    //
    //     var allWindows = [];
    //     browser.wait(function () {
    //         var returnedValue = false;
    //         browser.getAllWindowHandles().then(function (handles) {
    //             returnedValue = handles.length == 2;
    //             allWindows = handles;
    //             console.log("allWindows", allWindows);
    //         });
    //         return returnedValue;
    //     });
    //
    //
    //     browser.ignoreSynchronization = true;
    //
    //     browser.switchTo().window(allWindows[1]);
    //
    //     waitForRedirect('accounts', 30000);
    //
    //     console.log("emailInput", emailInput);
    //
    //
    //     // browser.getCurrentUrl().then(function (url) {
    //     //     console.log("url", url);
    //     //     browser.wait(function () {
    //     //         browser.getCurrentUrl().then(function (url) {
    //     //             if (/login/.test(url)) {
    //     //                 browser.waitForAngular();
    //     //                 console.log("darclLoginButton.containText()", darclLoginButton.containText());
    //     //                 expect(darclLoginButton.containText()).toContain('darcl');
    //     //             }
    //     //         });
    //     //     }, 1000);
    //     //
    //     // });
    // });


    /**
     Wait for the page to make it to the next URL before continuing.
     A supplement to browser.waitForAngular() because protractor will continue control
     flow before navigation starts.

     Inputs:
     necessaryUrlFragment: a portion of the url that signifies you have successfully navigated
     timeout: the number of ms to wait before throwing an error. Defaults to the browsers default
     page timeout.
     */
    function waitForRedirect(necessaryUrlFragment, timeout) {
        // Before we tell the browser to wait, assume it has not navigated
        var hasRedirected = false;

        // Passing a function to browser.wait() tells protractor to call that function repeatedly.
        // This function returns the closure variable hasRedirected, which will be set to true once the
        // necessaryUrlFragment has been found in the url
        browser.driver.wait(function () {
            browser.driver.getCurrentUrl()
            // Check to see if necessaryUrlFragment is in the current url
                .then(function (url) {
                    console.log("url+++++++++++++", url, url.includes(necessaryUrlFragment));
                    hasRedirected = url.includes(necessaryUrlFragment);

                    // Update our navigation status
                    //     .then(function (hasNavigated) {
                    //         hasRedirected = hasNavigated;
                    //     });
                });


            // Return our navigation status every time protractor asks for it - even if navigation is
            // not complete
            return hasRedirected;
        }, timeout);
    }

});
