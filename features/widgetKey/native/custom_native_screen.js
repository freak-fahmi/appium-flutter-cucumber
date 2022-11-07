const ActionHelper = require('../../helpers/actionHelpers');
const find = require('appium-flutter-finder');

class CustomNativeScreen {
    
    async customNativeClick(locator = '', timeout = 30000){
        await driver.switchContext('NATIVE_APP');
        var widgetLocator = await $(locator);
        ActionHelper.isVisible(widgetLocator);
        await widgetLocator.waitForDisplayed({ timeout: timeout });
        await widgetLocator.click();
        await driver.switchContext('FLUTTER');
    }

    async customNativeTextfield(locator = '', timeout = 30000, text = ''){
        await driver.switchContext('NATIVE_APP');
        var widgetLocator = await $(locator);
        await widgetLocator.isVisible();
        await widgetLocator.waitForDisplayed({ timeout: timeout });
        await widgetLocator.addValue(text);
        await driver.switchContext('FLUTTER');
    }
}

module.exports = new CustomNativeScreen();