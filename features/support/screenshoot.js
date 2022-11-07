const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
const { After, Status } = require('@cucumber/cucumber');
const {takeScreenshot} = require('./helpers');

After(async (scenarioResult) => {
  if (scenarioResult.result.status === Status.FAILED) {
      cucumberJson.attach(await takeScreenshot(), 'image/png');
  }
  return scenarioResult.status;
});