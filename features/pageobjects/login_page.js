const find = require('appium-flutter-finder');
const assert = require('assert');
const ActionHelper = require('../helpers/actionHelpers');
// require('chai').should();
const loginScreen = require('../widgetKey/flutter/login_screen.js');
// const { find } = require('./find');
// const loginScreenNative = require('../widgetKey/native/login_native_screen.js');

class LoginPageTest {
    getObjectLocator() {
        return require('../widgetKey/native/login_native_screen.js');
    }

    // static btnLewatiSplashScreen = find.byValueKey('btnLewatisplashscreen');
    // static btnDownloadSplashscreen = find.byValueKey('btnDownloadsplashscreen');
    // static btnLewati = find.byValueKey('buttonLewati');
    // static btnDaftarSekarang = find.byValueKey('ButtonDaftarSekarang');
    // static btnMasuk = find.byValueKey('buttonMasukOnBoarding');
    // static btnMasukLogin = find.byValueKey('btnMasukLogin');
    // static txtUsername = find.byValueKey('usernameTextField');
    // static txtPassword = find.byValueKey('passwordTextField');
    // static btnOK = find.byValueKey('buttonOKallert');
    // static btnLanjutHomedashboard = find.byValueKey('buttonLanjutDashboard');
    // static btnLanjut2 = find.byValueKey('btnLanjut2');
    // static btnMulai = find.byValueKey('btnMulai');
    // static iconUbahMenuFav = find.byValueKey('ubahTextField');


    async LaunchApp() {
        await assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');
        await driver.execute('flutter:clearTimeline');
        await driver.execute('flutter:forceGC');
        await driver.execute('flutter:waitFor', (loginScreen.btnLewatiSplashScreen));
        // await driver.getElementText(loginScreen.btnLewatiSplashScreen)
        // await expect(loginScreen.btnLewatiSplashScreen).toBePresent();
        // await expect(loginScreen.btnLewatiSplashScreen).toBeDisplayed
        console.log('Open Aplikasi');
    }

    async lewatiSplahScreen() {
        // await driver.execute('flutter:setFrameSync', false, 3500);
        // await driver.switchContext('NATIVE_APP');
        // var searchSelector = await $(`~LEWATI`);
        // await loginScreenNative.btnLewati;
        // ActionHelper.isVisible(await this.getObjectLocator().btnLewatiSplash);
        // await this.getObjectLocator().btnLewati.waitForDisplayed({ timeout: 30000 });
        // await this.getObjectLocator().btnLewati.click();
        // ActionHelper.click(await this.getObjectLocator().btnLewatiSplash);
        await driver.elementClick(loginScreen.btnLewatiSplashScreen);
        // await driver.switchContext('FLUTTER');
        await driver.elementClick(loginScreen.btnLewati);
        await driver.elementClick(loginScreen.btnMasuk);
    }

    async lewatiDownloadScreen() {
        await driver.elementClick(loginScreen.btnLewatiSplashScreen);
    }

    async login(username, password) {
        // await driver.switchContext('FLUTTER');
        await driver.execute('flutter:setFrameSync', false, 3500);
        await driver.elementClick(loginScreen.btnOK);
        await driver.elementSendKeys(loginScreen.txtUsername, username)
        await driver.elementSendKeys(loginScreen.txtPassword, password)
    }

    async clickButtonMasuk() {
        await driver.elementClick(loginScreen.btnMasukLogin);
        // assert.strictEqual(await driver.getObjectLocator(loginScreen.btnLewatiSplashScreen), 'LEWATI');
        // await driver.switchContext('NATIVE_APP');
        // var btnLewati = await $(`~LEWATI`);
        // ActionHelper.isVisible(btnLewati);
        // await btnLewati.waitForDisplayed({ timeout: 30000 });
        // await btnLewati.click();
        await driver.elementClick(loginScreen.btnLewatiSplashScreen);
        await driver.elementClick(loginScreen.btnLanjutHomedashboard);
        // var btnLanjut = await $(`~LANJUT`)
        // ActionHelper.isVisible(btnLanjut);
        // await btnLanjut.waitForDisplayed({ timeout: 30000 });
        // await btnLanjut.click();
        // await driver.switchContext('FLUTTER');
        await driver.elementClick(loginScreen.btnLanjut2);
        await driver.elementClick(loginScreen.btnMulai);
    }

    async RegistOnline() {
        await driver.execute('flutter:setFrameSync', false, 3500);
        await driver.elementClick(loginScreen.btnLewatiSplashScreen);
        await driver.elementClick(loginScreen.btnLewati);
        await driver.elementClick(loginScreen.btnDaftarSekarang);
    }

    async VerifyHomeDashboard() {
        // await driver.execute('flutter:waitForAbsent', loginScreen.btnLanjutHomeDashboard)
        // await assert.strictEqual((loginScreen.btnLanjutHomeDashboard), 'buttonLanjutDashboard');
        await expect(loginScreen.btnLanjutHomedashboard).toBeDisplayed
    }
}

module.exports = new LoginPageTest();
