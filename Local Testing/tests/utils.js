define([
  'intern!object',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require, registry) {
  registerSuite({
    name: 'test',

    'local test': function () {
      return this.remote
        .get(require.toUrl('app/index.html'))
        .findByCssSelector("input")
          .click()
          .type('BrowserStack')
          .end()
        .findByCssSelector('h1')
          .click()
          .getVisibleText()
          .then(function(text) {
            assert.strictEqual(text, 'BrowserStack');
          })
          .end()
        .sleep(5000)
        .takeScreenshot();
    }
  });
});
