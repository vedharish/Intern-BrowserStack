define([
  'intern!object',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require, registry) {
  registerSuite({
    name: 'search',

    'google search': function () {
      return this.remote
        .get(require.toUrl('http://www.google.com'))
        .findByName("q")
          .pressKeys("BrowerStack")
          .submit()
          .end()
        .sleep(5000)
        .takeScreenshot();
    }
  });
});
