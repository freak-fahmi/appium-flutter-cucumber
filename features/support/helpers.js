async function takeScreenshot() {
    // First switch to the native context
    await driver.switchContext('NATIVE_APP');
    // Execute the native screenshot command
    const screenshot = await driver.takeScreenshot();
    // Switch back to the Flutter context
    await driver.switchContext('FLUTTER');
    return screenshot;
}
module.exports = {takeScreenshot};