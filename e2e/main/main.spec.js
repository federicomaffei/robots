'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });

  it('should create robot with correct data', function() {
    page.upperxInput.sendKeys("1");
    page.upperyInput.sendKeys("1");
    element(By.model('firstOrientation')).$('[value="1"]').click();
    page.robotSubmit.click().then(function(){
      expect(element(by.css("#position1")).getText()).toBe('Robot 1 position: 1 1 N');
    });
  });
});
