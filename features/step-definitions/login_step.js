const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPageTest = require('../pageobjects/login_page');


Given(/^I open the AGEN46$/, { timeout: 20000, timeoutMsg: 'Gagal Waktu Melebihi Batas' }, async () => {
    console.log('Start Aplication')
    await LoginPageTest.LaunchApp()
    // await browser.pause(10000);
});

When(/^I lewati splash screen$/,{ timeout: 10000, timeoutMsg: 'Gagal Waktu Melebihi Batas'}, async () => {
    await LoginPageTest.lewatiSplahScreen()
});

When(/^I lewati download screen$/, async () => {
    await LoginPageTest.lewatiDownloadScreen()
});

When(/^I login with (\w+) and (.+)$/,{ timeout: 20000, timeoutMsg: 'Gagal Waktu Melebihi Batas' }, async (username, password) => {
    await LoginPageTest.login(username, password)
});

When(/^I click button masuk$/, { timeout: 10000, timeoutMsg: 'Gagal Waktu Melebihi Batas' }, async () => {
    await LoginPageTest.clickButtonMasuk()
});

When(/^I tap dashboard guide$/, async () => {
    await LoginPageTest.dashboardGuide()
});

Then(/^I should see a element present$/, async () => {
    // await browser.pause(20000);
    await LoginPageTest.VerifyHomeDashboard()
});